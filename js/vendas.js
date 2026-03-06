// ======================
// MODULO VENDAS
// ======================

const tabVendas = document.getElementById("tabVendas");

if(tabVendas){

  tabVendas.addEventListener("click", ()=>{

    document.querySelectorAll(".tab").forEach(t=>{
      t.classList.remove("active");
    });

    tabVendas.classList.add("active");

    document.getElementById("financasBox")?.classList.add("hidden");
    document.getElementById("metasBox")?.classList.add("hidden");
    document.getElementById("dashboardBox")?.classList.add("hidden");
    document.getElementById("vendasBox")?.classList.remove("hidden");

  });

}

async function carregarCanais() {

const { data, error } = await supa
.from("canais_vendas")
.select("*")
  console.log(data)

if (error) {
console.error(error)
return
}

const select = document.getElementById("vendaCanal")

select.innerHTML = '<option value="">Canal de venda</option>'

data.forEach(canal => {

const option = document.createElement("option")

option.value = canal.id
option.textContent = canal.nome
option.dataset.percentual = canal.comissao_percentual
option.dataset.fixa = canal.comissao_fixa
option.dataset.tipo = canal.tipo_comissao
option.dataset.base = canal.base_comissao

select.appendChild(option)

})

}

setTimeout(carregarCanais, 1000)

document.getElementById("vendaCanal")
.addEventListener("change", function(){

  const opt = this.selectedOptions[0]

  if(!opt.dataset.percentual) return

  document.getElementById("vendaComissaoPercentual").value =
  opt.dataset.percentual

  document.getElementById("vendaTaxaFixa").value =
  opt.dataset.fixa
  
  document.getElementById("vendaBaseComissao").value =
  opt.dataset.base

})
document.getElementById("btnSalvarVenda")
.addEventListener("click", async function(){

const data = document.getElementById("vendaData").value
const canal = document.getElementById("vendaCanal").value
const produto = document.getElementById("vendaProduto").value
const quantidade = document.getElementById("vendaQuantidade").value
const custoProduto = document.getElementById("vendaCustoProduto").value
const valorVenda = document.getElementById("vendaValorVenda").value
const freteReceita = Number(document.getElementById("vendaFreteReceita").value) || 0
const freteCusto = Number(document.getElementById("vendaFreteCusto").value) || 0
const comissao = document.getElementById("vendaComissaoPercentual").value
const taxaFixa = document.getElementById("vendaTaxaFixa").value
const baseComissao = document.getElementById("vendaBaseComissao").value
const outrosCustos = Number(document.getElementById("vendaOutrosCustos").value) || 0
console.log("clicou salvar venda")
  if(!data || !canal || !produto || !quantidade || !custoProduto || !valorVenda){
alert("Preencha os campos obrigatórios")
return
}
  
const { data: resultado, error } = await supa
.from("vendas_produtos")
.insert([
{
data_venda: data,
canal: canal,
produto: produto,
quantidade: quantidade,
custo_produto: custoProduto,
valor_venda: valorVenda,
frete_receita: freteReceita,
frete_custo: freteCusto,
comissao_percentual: comissao,
taxa_fixa: taxaFixa,
base_comissao: baseComissao,
outros_custos: outrosCustos
}
])

if(error){
console.error("Erro ao salvar venda", error)
alert("Erro ao salvar venda")
return
}

alert("Venda salva com sucesso!")

  carregarVendas()

})

async function carregarVendas(){

  // Helpers de formatação (somente visual)
  const fmtBRL = (v) => {
    const n = Number(v);
    if (!isFinite(n)) return "—";
    return ${n.toLocaleString("pt-BR", { maximumFractionDigits: 2 })}%;
  };

  const fmtPct = (v) => {
    const n = Number(v);
    if (!isFinite(n)) return "—";
    return ${n.toLocaleString("pt-BR", { maximumFractionDigits: 2 })}%;
  };

  // 1) Carrega canais para mostrar NOME no histórico (sem mudar banco)
  const { data: canaisData, error: canaisError } = await supa
    .from("canais_vendas")
    .select("id, nome");

  if (canaisError) {
    console.error("Erro ao carregar canais (histórico)", canaisError);
  }

   const canaisMap = {};
  (canaisData || []).forEach(c => { canaisMap[String(c.id)] = c.nome; });

  // 2) Carrega vendas
  const { data, error } = await supa
    .from("vendas_produtos")
    .select("*")
    .order("data_venda", { ascending:false });

  if(error){
    console.error("Erro ao carregar vendas", error);
    return;
  }

  const tabela = document.getElementById("listaVendas");
  tabela.innerHTML = "";

  // Vazio
  if(!data || data.length === 0){
    tabela.innerHTML = <div class="empty">Nenhuma venda registrada</div>;
    return;
  }

  // Header
  tabela.innerHTML += `
    <div class="salesRow salesHeader">
      <div class="salesCell salesHideMobile">Data</div>
      <div class="salesCell">Canal</div>
      <div class="salesCell">Produto</div>
      <div class="salesCell salesNum">Qtd</div>
      <div class="salesCell salesNum">Venda</div>
      <div class="salesCell salesNum">Lucro</div>
      <div class="salesCell salesNum">Markup</div>
    </div>
  `;

  // Linhas
  data.forEach(venda => {
    const canalNome = canaisMap[String(venda.canal)] || venda.canal || "—";

    const lucroNum = Number(venda.lucro);
    const lucroClass = isFinite(lucroNum) ? (lucroNum >= 0 ? "salesPos" : "salesNeg") : "";

    // markup no banco pode estar como número (ex: 35.5) ou null
    const markupTxt = (venda.markup === null || venda.markup === undefined || venda.markup === "")
      ? "—"
      : fmtPct(venda.markup);

    tabela.innerHTML += `
      <div class="salesRow">
        <div class="salesCell salesHideMobile">${venda.data_venda || "—"}</div>

        <div class="salesCell">
          <span class="badge cat">${canalNome}</span>
        </div>

        <div class="salesCell salesProduto" title="${venda.produto || ""}">
          ${venda.produto || "—"}
        </div>

        <div class="salesCell salesNum">${venda.quantidade ?? "—"}</div>

        <div class="salesCell salesNum">${fmtBRL(venda.valor_venda)}</div>

        <div class="salesCell salesNum ${lucroClass}">
          ${fmtBRL(venda.lucro)}
        </div>

        <div class="salesCell salesNum salesMarkup">${markupTxt}</div>
      </div>
    `;
  });

}

tabela.innerHTML += linha

})

}
