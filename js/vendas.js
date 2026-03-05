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

async function carregarCanais(){

  const { data, error } = await supa
  .from("canais_venda")
  .select("*")
  .order("nome")

  if(error){
    console.log(error)
    return
  }

  const select = document.getElementById("vendaCanal")

  if(!select) return

  select.innerHTML = '<option value="">Selecione o canal</option>'

  data.forEach(canal => {

    const option = document.createElement("option")
    option.value = canal.id
    option.textContent = canal.nome

    option.dataset.percentual = canal.comissao_percentual
    option.dataset.fixa = canal.taxa_fixa
    option.dataset.tipo = canal.tipo_comissao
    option.dataset.base = canal.base_comissao

    select.appendChild(option)

  })

}

carregarCanais()
