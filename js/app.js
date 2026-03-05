// UI refs
  const loginBox = document.getElementById("loginBox");
  const financasBox = document.getElementById("financasBox");
  const metasBox = document.getElementById("metasBox");
  const dashboardBox = document.getElementById("dashboardBox");
  const tabs = document.getElementById("tabs");
  const tabFin = document.getElementById("tabFin");
  const tabMeta = document.getElementById("tabMeta");
  const tabDash = document.getElementById("tabDash");
  const pillEmail = document.getElementById("pillEmail");
  const btnSair = document.getElementById("btnSair");
  const btnLogin = document.getElementById("btnLogin");

  const mesSelect = document.getElementById("mesSelect");
  const filtroCategoriaEl = document.getElementById("filtroCategoria");
  const tipoEl = document.getElementById("tipo");
  const dataEl = document.getElementById("data");
  const valorEl = document.getElementById("valor");
  const categoriaEl = document.getElementById("categoria");
  const descricaoEl = document.getElementById("descricao");
  const btnSalvar = document.getElementById("btnSalvar");
  const btnExportar = document.getElementById("btnExportar");
  const btnPdf = document.getElementById("btnPdf");
  const listaEl = document.getElementById("lista");
  const buscaEl = document.getElementById("busca");
  const buscaInfo = document.getElementById("buscaInfo");
  const bancoSelect = document.getElementById("bancoSelect");

  const kpiEntradas = document.getElementById("kpiEntradas");
  const kpiSaidas = document.getElementById("kpiSaidas");
  const kpiSaldo = document.getElementById("kpiSaldo");
  const kpiQtd = document.getElementById("kpiQtd");

  const dropZone = document.getElementById("dropZone");
  const fileCsv = document.getElementById("fileCsv");
  const btnImportar = document.getElementById("btnImportar");
  const importInfo = document.getElementById("importInfo");

  const dropZoneOfx = document.getElementById("dropZoneOfx");
  const fileOfx = document.getElementById("fileOfx");
  const btnImportarOfx = document.getElementById("btnImportarOfx");
  const ofxInfo = document.getElementById("ofxInfo");

  const ofxOverlay = document.getElementById("ofxOverlay");
  const btnOfxClose = document.getElementById("btnOfxClose");
  const btnOfxCancelar = document.getElementById("btnOfxCancelar");
  const btnOfxConfirmar = document.getElementById("btnOfxConfirmar");
  const btnOfxSelectAll = document.getElementById("btnOfxSelectAll");
  const btnOfxUnselectAll = document.getElementById("btnOfxUnselectAll");
  const ofxBancoSelect = document.getElementById("ofxBancoSelect");
  const ofxTbody = document.getElementById("ofxTbody");
  const ofxCount = document.getElementById("ofxCount");

  const metaMesEl = document.getElementById("metaMes");
  const metaValorEl = document.getElementById("metaValor");
  const btnSalvarMeta = document.getElementById("btnSalvarMeta");
  const metaKpi = document.getElementById("metaKpi");
  const ganheiKpi = document.getElementById("ganheiKpi");
  const faltaKpi = document.getElementById("faltaKpi");
  const mediaDiaKpi = document.getElementById("mediaDiaKpi");
  const bar = document.getElementById("bar");
  const progressText = document.getElementById("progressText");

  const toast = document.getElementById("toast");
  const toastTitle = document.getElementById("toastTitle");
  const toastMsg = document.getElementById("toastMsg");
  let toastTimer = null;

  const modalOverlay = document.getElementById("modalOverlay");
  const modalBody = document.getElementById("modalBody");
  const btnModalClose = document.getElementById("btnModalClose");
  const btnCancelar = document.getElementById("btnCancelar");
  const btnConfirmar = document.getElementById("btnConfirmar");

  const editOverlay = document.getElementById("editOverlay");
  const btnEditClose = document.getElementById("btnEditClose");
  const btnEditCancelar = document.getElementById("btnEditCancelar");
  const btnEditSalvar = document.getElementById("btnEditSalvar");
  const editDataEl = document.getElementById("editData");
  const editTipoEl = document.getElementById("editTipo");
  const editValorEl = document.getElementById("editValor");
  const editCategoriaEl = document.getElementById("editCategoria");
  const editDescricaoEl = document.getElementById("editDescricao");
  const editBancoSelect = document.getElementById("editBancoSelect");

  const bankOverlay = document.getElementById("bankOverlay");
  const btnGerenciarBancos = document.getElementById("btnGerenciarBancos");
  const btnBankClose = document.getElementById("btnBankClose");
  const btnBankFechar2 = document.getElementById("btnBankFechar2");
  const bankNome = document.getElementById("bankNome");
  const btnBankAdd = document.getElementById("btnBankAdd");
  const bankList = document.getElementById("bankList");

  const dashTitleSub = document.getElementById("dashTitleSub");
  const chkComparar = document.getElementById("chkComparar");
  const multiMonthsWrap = document.getElementById("multiMonthsWrap");
  const dashMonthsMulti = document.getElementById("dashMonthsMulti");
  const dashQuickRange = document.getElementById("dashQuickRange");
  const btnAplicarComparacao = document.getElementById("btnAplicarComparacao");

  const dashMesSelect = document.getElementById("dashMesSelect");
  const topCatsBox = document.getElementById("topCatsBox");
  const dashEntradas = document.getElementById("dashEntradas");
  const dashSaidas = document.getElementById("dashSaidas");
  const dashSaldo = document.getElementById("dashSaldo");
  const dashQtd = document.getElementById("dashQtd");
  const dashMonthLabel = document.getElementById("dashMonthLabel");
  const dashHintResumo = document.getElementById("dashHintResumo");
  const dashHintDiario = document.getElementById("dashHintDiario");
  const dashHintCats = document.getElementById("dashHintCats");
  const dashHintComparacao = document.getElementById("dashHintComparacao");
  const dashAlerts = document.getElementById("dashAlerts");
  const dashHintAlerts = document.getElementById("dashHintAlerts");

  let chartDiario = null;
  let chartComparacao = null;

  let currentUser = null;
  let currentMonth = null;
  let dashboardMonth = null;

  let pendingDelete = null;
  let currentFiltroCategoria = "Todas";
  let currentSearch = "";
  let lastFinCache = null;
  let editingItem = null;

  let banksCache = [];
  let ofxRows = [];

  function showToast(title, msg){
    toastTitle.textContent = title;
    toastMsg.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 6500);
  }
  function brl(n){
    return new Intl.NumberFormat("pt-BR", { style:"currency", currency:"BRL" }).format(Number(n || 0));
  }
  function escapeHtml(str){
    return (str || "").toString().replace(/[&<>"']/g, m => ({
      "&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"
    }[m]));
  }
  function pad2(n){ return String(n).padStart(2,"0"); }
  function monthKeyFromDateObj(d){ return `${pad2(d.getMonth()+1)}/${d.getFullYear()}`; }
  function getDefaultMonth(){ return monthKeyFromDateObj(new Date()); }
  function getTodayBR(){
    const d = new Date();
    return `${pad2(d.getDate())}/${pad2(d.getMonth()+1)}/${d.getFullYear()}`;
  }
  function parseBRDateToISO(br){
    const v = (br || "").trim();
    const m = v.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
    if (!m) return null;
    const dd = Number(m[1]), mm = Number(m[2]), yyyy = Number(m[3]);
    if (mm < 1 || mm > 12) return null;
    const dim = new Date(yyyy, mm, 0).getDate();
    if (dd < 1 || dd > dim) return null;
    return `${yyyy}-${pad2(mm)}-${pad2(dd)}`;
  }
  function formatISOToBR(iso){
    const m = (iso || "").match(/^(\d{4})-(\d{2})-(\d{2})/);
    if (!m) return "";
    return `${m[3]}/${m[2]}/${m[1]}`;
  }
  function parseMonthKey(mk){
    const m = (mk || "").trim().match(/^(\d{2})\/(\d{4})$/);
    if (!m) return null;
    const mm = Number(m[1]), yyyy = Number(m[2]);
    if (mm < 1 || mm > 12) return null;
    return { mm, yyyy };
  }
  function monthStartEndISO(monthKey){
    const p = parseMonthKey(monthKey);
    if (!p) return null;
    const start = `${p.yyyy}-${pad2(p.mm)}-01`;
    const endDay = new Date(p.yyyy, p.mm, 0).getDate();
    const end = `${p.yyyy}-${pad2(p.mm)}-${pad2(endDay)}`;
    return { start, end, endDay, yyyy: p.yyyy, mm: p.mm };
  }
  function remainingDays(mm, yyyy){
    const now = new Date();
    const isCurrent = (now.getFullYear() === yyyy && (now.getMonth()+1) === mm);
    const dim = new Date(yyyy, mm, 0).getDate();
    if (!isCurrent) return dim;
    return Math.max(dim - now.getDate() + 1, 1);
  }
  function getLastNMonthKeys(n){
    const out = [];
    const now = new Date();
    for (let i = n-1; i >= 0; i--){
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      out.push(monthKeyFromDateObj(d));
    }
    return out;
  }
  function sortMonthKeys(list){
    const unique = Array.from(new Set(list.filter(Boolean)));
    unique.sort((a,b) => {
      const pa = parseMonthKey(a), pb = parseMonthKey(b);
      if (!pa || !pb) return 0;
      if (pa.yyyy !== pb.yyyy) return pb.yyyy - pa.yyyy;
      return pb.mm - pa.mm;
    });
    return unique;
  }
  function fillMonthDropdown(selectEl, months, selected){
    const unique = sortMonthKeys(months);
    selectEl.innerHTML = "";
    for (const mk of unique){
      const opt = document.createElement("option");
      opt.value = mk;
      opt.textContent = mk;
      selectEl.appendChild(opt);
    }
    selectEl.value = selected;
    if (selectEl.value !== selected && unique.length) selectEl.value = unique[0];
  }
  function fillDashboardMulti(months){
    const unique = sortMonthKeys(months);
    dashMonthsMulti.innerHTML = "";
    for (const mk of unique){
      const opt = document.createElement("option");
      opt.value = mk;
      opt.textContent = mk;
      dashMonthsMulti.appendChild(opt);
    }
  }
  function fillCategoriaFilter(categorias, selected){
    const unique = Array.from(new Set(categorias.filter(Boolean)));
    unique.sort((a,b) => a.localeCompare(b, "pt-BR"));
    filtroCategoriaEl.innerHTML = "";
    const optAll = document.createElement("option");
    optAll.value = "Todas";
    optAll.textContent = "Todas";
    filtroCategoriaEl.appendChild(optAll);
    for (const c of unique){
      const opt = document.createElement("option");
      opt.value = c;
      opt.textContent = c;
      filtroCategoriaEl.appendChild(opt);
    }
    filtroCategoriaEl.value = selected || "Todas";
  }

  function showLogin(){
    loginBox.classList.remove("hidden");
    tabs.classList.add("hidden");
    financasBox.classList.add("hidden");
    metasBox.classList.add("hidden");
    dashboardBox.classList.add("hidden");
    btnSair.classList.add("hidden");
    pillEmail.textContent = "Não logado";
  }
  function showApp(email){
    loginBox.classList.add("hidden");
    tabs.classList.remove("hidden");
    btnSair.classList.remove("hidden");
    pillEmail.textContent = email || "Logado";
    forceShowFinancas();
  }
  function setActiveTab(active){
    for (const el of [tabFin, tabMeta, tabDash]) el.classList.remove("active");
    active.classList.add("active");
  }
  function forceShowFinancas(){
    setActiveTab(tabFin);
    financasBox.classList.remove("hidden");
    metasBox.classList.add("hidden");
    dashboardBox.classList.add("hidden");
    initFinancas()
  }
  function showMetas(){
    setActiveTab(tabMeta);
    metasBox.classList.remove("hidden");
    financasBox.classList.add("hidden");
    dashboardBox.classList.add("hidden");
  }
  function showDashboard(){
    setActiveTab(tabDash);
    dashboardBox.classList.remove("hidden");
    financasBox.classList.add("hidden");
    metasBox.classList.add("hidden");
  }

    // ===== BANCOS =====
  async function loadBanks(){
    if (!currentUser) return;
    const { data, error } = await supa
      .from("bancos")
      .select("id,nome")
      .eq("user_id", currentUser.id)
      .order("nome", { ascending: true });
    if (error) throw error;
    banksCache = data || [];
  }
  function fillBankSelects(){
    const opts = [`<option value="">— Sem banco (opcional) —</option>`]
      .concat(banksCache.map(b => `<option value="${b.id}">${escapeHtml(b.nome)}</option>`))
      .join("");
    bancoSelect.innerHTML = opts;
    editBancoSelect.innerHTML = opts;
    ofxBancoSelect.innerHTML = opts;
  }
  function openBankModal(){
    bankOverlay.classList.add("show");
    renderBankList();
  }
  function closeBankModal(){
    bankOverlay.classList.remove("show");
    bankNome.value = "";
  }
  function renderBankList(){
    if (!banksCache.length){
      bankList.innerHTML = `<div class="empty">Nenhum banco cadastrado.</div>`;
      return;
    }
    bankList.innerHTML = banksCache.map(b => `
      <div class="item" style="padding:10px 10px">
        <div class="leftcol">
          <div class="desc">🏦 ${escapeHtml(b.nome)}</div>
          <div class="hint" style="margin:0">ID: ${b.id}</div>
        </div>
        <div class="rightcol">
          <button class="btn btn-icon btn-icon-danger" data-bank-del="1" data-id="${b.id}" title="Excluir">🗑️</button>
        </div>
      </div>
    `).join("");
  }

  // ===== REGISTROS =====
  async function fetchMonthsFromRegistros(userId){
    const { data, error } = await supa
      .from("registros")
      .select("mes")
      .eq("user_id", userId)
      .order("mes", { ascending: false })
      .limit(5000);
    if (error) throw error;
    return (data || []).map(r => r.mes).filter(Boolean);
  }
  async function fetchRegistrosByMonth(userId, monthKey){
    const range = monthStartEndISO(monthKey);
    if (!range) throw new Error("Mês inválido.");
    const { data, error } = await supa
      .from("registros")
      .select("id, descricao, valor, data, mes, categoria, banco_id")
      .eq("user_id", userId)
      .gte("data", range.start)
      .lte("data", range.end)
      .order("data", { ascending: false });
    if (error) throw error;

    const rows = (data || []).map(r => ({
      id: r.id,
      descricao: r.descricao ?? "",
      valor: Number(r.valor || 0),
      dataISO: r.data,
      mes: r.mes,
      categoria: r.categoria || "Outros",
      banco_id: r.banco_id ? String(r.banco_id) : ""
    }));

    let entradas=0, saidas=0, saldo=0;
    for (const r of rows){
      saldo += r.valor;
      if (r.valor >= 0) entradas += r.valor;
      else saidas += Math.abs(r.valor);
    }
    const categorias = rows.map(r => r.categoria || "Outros");
    return { rows, entradas, saidas, saldo, categorias, range };
  }

  function renderFinancas(fin){
    lastFinCache = fin;
    kpiEntradas.textContent = brl(fin.entradas);
    kpiSaidas.textContent = brl(fin.saidas);
    kpiSaldo.textContent = brl(fin.saldo);
    kpiSaldo.className = "v " + (fin.saldo >= 0 ? "green" : "red");
    kpiQtd.textContent = String(fin.rows.length);

    let filtered = fin.rows;
    if (currentFiltroCategoria && currentFiltroCategoria !== "Todas"){
      filtered = filtered.filter(r => (r.categoria || "Outros") === currentFiltroCategoria);
    }

    const q = (currentSearch || "").trim().toLowerCase();
    if (q){
      filtered = filtered.filter(r => (r.descricao || "").toLowerCase().includes(q));
      buscaInfo.textContent = `Filtrando: "${currentSearch}" • ${filtered.length} itens`;
    } else {
      buscaInfo.textContent = "Mostrando tudo";
    }

    if (!filtered.length){
      listaEl.innerHTML = `<div class="empty">Nenhum registro para este mês/filtro.</div>`;
      return;
    }

    listaEl.innerHTML = filtered.map(r => {
      const cls = r.valor >= 0 ? "pos" : "neg";
      const bCls = r.valor >= 0 ? "in" : "out";
      const bTxt = r.valor >= 0 ? "Entrada" : "Saída";
      const catTxt = r.categoria || "Outros";
      const bankName = r.banco_id ? (banksCache.find(x => String(x.id) === String(r.banco_id))?.nome || "Banco") : "";
      return `
        <div class="item">
          <div class="leftcol">
            <div class="desc">${escapeHtml(r.descricao)}</div>
            <div class="meta">
              <span class="badge ${bCls}">${bTxt}</span>
              <span class="badge cat">${escapeHtml(catTxt)}</span>
              <span class="badge">${escapeHtml(formatISOToBR(r.dataISO))}</span>
              ${bankName ? `<span class="badge">🏦 ${escapeHtml(bankName)}</span>` : ``}
            </div>
          </div>
          <div class="rightcol">
            <div class="amount ${cls}">${brl(r.valor)}</div>
            <button class="btn btn-icon btn-icon-edit" type="button"
              title="Editar"
              data-edit="1"
              data-id="${escapeHtml(String(r.id))}"
              data-desc="${escapeHtml(r.descricao)}"
              data-valor="${escapeHtml(String(r.valor))}"
              data-data="${escapeHtml(String(r.dataISO))}"
              data-cat="${escapeHtml(String(r.categoria || "Outros"))}"
              data-bankid="${escapeHtml(String(r.banco_id || ""))}"
            >✏️</button>
            <button class="btn btn-icon btn-icon-danger" type="button"
              title="Excluir"
              data-del="1"
              data-id="${escapeHtml(String(r.id))}"
              data-desc="${escapeHtml(r.descricao)}"
              data-valor="${escapeHtml(String(r.valor))}"
              data-data="${escapeHtml(String(r.dataISO))}"
              data-cat="${escapeHtml(String(r.categoria || "Outros"))}"
            >🗑️</button>
          </div>
        </div>
      `;
    }).join("");
  }

  // ===== METAS =====
  async function getMeta(userId, mes){
    const { data, error } = await supa.from("config").select("meta").eq("user_id", userId).eq("mes", mes).maybeSingle();
    if (error) throw error;
    return Number(data?.meta || 0);
  }
  async function upsertMeta(userId, mes, meta){
    const { error } = await supa.from("config").upsert({ user_id: userId, mes, meta }, { onConflict: "user_id,mes" });
    if (error) throw error;
  }
  async function atualizarMetasUI(mes){
    const meta = await getMeta(currentUser.id, mes);
    const fin = (lastFinCache && currentMonth === mes) ? lastFinCache : await fetchRegistrosByMonth(currentUser.id, mes);
    const entradasMes = fin.entradas;

    metaKpi.textContent = brl(meta);
    ganheiKpi.textContent = brl(entradasMes);

    const falta = Math.max(meta - entradasMes, 0);
    faltaKpi.textContent = brl(falta);

    const p = parseMonthKey(mes);
    const dias = p ? remainingDays(p.mm, p.yyyy) : 30;
    const mediaDia = dias > 0 ? (falta / dias) : falta;
    mediaDiaKpi.textContent = brl(mediaDia);

    const perc = meta > 0 ? (entradasMes / meta) * 100 : 0;
    bar.style.width = Math.max(0, Math.min(perc, 100)) + "%";
    progressText.textContent = `${(Math.min(perc, 100)).toFixed(1)}% da meta • ${dias} dias`;
  }

  // ===== CSV EXPORT =====
  function makeCSV(rows){
    const header = ["Data","Tipo","Categoria","Descrição","Valor"];
    const lines = [header];
    for (const r of rows){
      const tipo = r.valor >= 0 ? "Entrada" : "Saída";
      const cat = r.categoria || "Outros";
      const dataBR = formatISOToBR(r.dataISO);
      const valor = r.valor;
      const desc = (r.descricao || "").replace(/\s+/g, " ").trim();
      lines.push([dataBR, tipo, cat, desc, String(valor)].map(v => {
        const s = String(v ?? "");
        if (/[;"\n\r]/.test(s)) return `"${s.replace(/"/g,'""')}"`;
        return s;
      }));
    }
    return lines.map(l => l.join(";")).join("\n");
  }
  function downloadCSV(content, filename){
    const blob = new Blob([content], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  // ===== PDF (IDÊNTICO AO MODELO: tamanhos/centralização) =====
  function moneyBRAbs(n){
    const v = Math.abs(Number(n || 0));
    return "R$ " + new Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(v);
  }
  function moneyBR(n){
    const v = Number(n || 0);
    const abs = moneyBRAbs(v);
    return v < 0 ? "-" + abs : abs;
  }

  
  // ===== PDF PREMIUM EXECUTIVO =====

  async function generatePDFClassic(){
    if (!lastFinCache || !currentUser){
      showToast("PDF", "Carregue um mês primeiro.");
      return;
    }

    const mk = currentMonth || getDefaultMonth();
    const safeMonth = mk.replace("/", "_").toLowerCase();

    const fin = lastFinCache;
    const rows = fin.rows || [];

    // Meta (opcional)
    let meta = 0;
    try{ meta = await getMeta(currentUser.id, mk); }catch(e){ meta = 0; }

    const entradas = Number(fin.entradas || 0);
    const saidas = Number(fin.saidas || 0);
    const saldo = Number(fin.saldo || 0);
    const qtd = rows.length;

    const falta = Math.max(meta - entradas, 0);
    const progresso = meta > 0 ? Math.min((entradas / meta) * 100, 100) : 0;

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ unit: "pt", format: "a4" });

    const pageW = doc.internal.pageSize.width;    // 595
    const pageH = doc.internal.pageSize.height;   // 842

    // Margens e largura útil (centralizado)
    const margin = 46;
    const contentW = pageW - margin*2;
    const x0 = margin;

    // Paleta (igual ao modelo aprovado)
    const C = {
      ink: [15, 23, 42],
      muted: [100, 116, 139],
      border: [229, 231, 235],
      bg: [245, 247, 250],
      card: [255, 255, 255],
      brand: [0, 194, 255],
      brand2: [65, 214, 255],
      success: [34, 197, 94],
      danger: [239, 68, 68]
    };

    // Helpers
    const now = new Date();
    const genDate = `${pad2(now.getDate())}/${pad2(now.getMonth()+1)}/${now.getFullYear()} ${pad2(now.getHours())}:${pad2(now.getMinutes())}`;

    function setFont(style, size){
      doc.setFont("helvetica", style);
      doc.setFontSize(size);
    }
    function txt(str, x, y, opt){
      doc.text(String(str || ""), x, y, opt || {});
    }
    function rrect(x,y,w,h,r, fillRGB, strokeRGB, lw){
      if (fillRGB){
        doc.setFillColor(fillRGB[0], fillRGB[1], fillRGB[2]);
      }
      if (strokeRGB){
        doc.setDrawColor(strokeRGB[0], strokeRGB[1], strokeRGB[2]);
      }
      doc.setLineWidth(lw ?? 1);
      doc.roundedRect(x,y,w,h,r,r, fillRGB ? (strokeRGB ? "FD" : "F") : "S");
    }
    function shadowCard(x,y,w,h,r){
      // Sombra leve (simulada)
      doc.setFillColor(235, 238, 245);
      doc.roundedRect(x+3, y+4, w, h, r, r, "F");
      rrect(x,y,w,h,r, C.card, C.border, 1);
    }
    function chip(x,y,w,h,label){
      doc.setFillColor(235, 248, 255);
      doc.setDrawColor(186, 230, 253);
      doc.setLineWidth(1);
      doc.roundedRect(x, y, w, h, 999, 999, "FD");
      setFont("bold", 9.5);
      doc.setTextColor(C.brand[0], C.brand[1], C.brand[2]);
      txt(label, x + w/2, y + h/2 + 3, { align:"center" });
      doc.setTextColor(C.ink[0], C.ink[1], C.ink[2]);
    }

    // Fundo da página
    doc.setFillColor(C.bg[0], C.bg[1], C.bg[2]);
    doc.rect(0,0,pageW,pageH,"F");

    // ===== Header (Executivo) =====
    let y = 44;

    // barra/linha de marca
    doc.setFillColor(C.brand2[0], C.brand2[1], C.brand2[2]);
    doc.roundedRect(x0, y, 140, 4, 3, 3, "F");
    doc.setFillColor(C.brand[0], C.brand[1], C.brand[2]);
    doc.circle(x0 + 140, y + 2, 2, "F");

    y += 20;

    setFont("bold", 22);
    doc.setTextColor(C.ink[0], C.ink[1], C.ink[2]);
    txt("Relatório Financeiro", x0, y);

    setFont("normal", 10.5);
    doc.setTextColor(C.muted[0], C.muted[1], C.muted[2]);
    txt(`Mês: ${mk} • Controle Premium`, x0, y + 16);

    // meta info direita
    const rightX = x0 + contentW;
    setFont("normal", 9.5);
    txt(`Gerado em: ${genDate}`, rightX, y - 2, { align:"right" });
    // chip "Finanças"
    chip(rightX - 78, y + 6, 78, 20, "Finanças");

    y += 40;

    // ===== KPI cards =====
    const kpiGap = 12;
    const kpiW = (contentW - 3*kpiGap) / 4;
    const kpiH = 88;

    function drawKPI(i, title, value, accent){
      const x = x0 + i*(kpiW + kpiGap);
      shadowCard(x, y, kpiW, kpiH, 14);

      // bolinha de acento
      if (accent){
        doc.setFillColor(accent[0], accent[1], accent[2]);
        doc.circle(x + kpiW - 16, y + 18, 4.5, "F");
      }

      setFont("normal", 9.5);
      doc.setTextColor(C.muted[0], C.muted[1], C.muted[2]);
      txt(title, x + 14, y + 28);

      setFont("bold", 14.5);
      doc.setTextColor(C.ink[0], C.ink[1], C.ink[2]);
      txt(value, x + 14, y + 55);
    }

    drawKPI(0, "Entradas", moneyBRAbs(entradas), C.success);
    drawKPI(1, "Saídas", moneyBRAbs(saidas), C.danger);
    drawKPI(2, "Saldo", moneyBR(saldo), saldo >= 0 ? C.success : C.danger);
    drawKPI(3, "Registros", String(qtd), C.brand);

    y += kpiH + 16;

    // ===== Meta + gráfico (2 colunas) =====
    const colGap = 12;
    const leftW = (contentW - colGap) * 0.54;
    const rightW = contentW - colGap - leftW;
    const cardH = 160;

    // Meta card
    shadowCard(x0, y, leftW, cardH, 16);

    setFont("bold", 11.5);
    doc.setTextColor(C.ink[0], C.ink[1], C.ink[2]);
    txt("Meta do mês", x0 + 14, y + 26);

    setFont("normal", 9.5);
    doc.setTextColor(C.muted[0], C.muted[1], C.muted[2]);
    const metaStr = moneyBRAbs(meta);
    const entradasStr = moneyBRAbs(entradas);
    const faltaStr = moneyBRAbs(falta);
    txt(`Meta: ${metaStr}   •   Entradas: ${entradasStr}`, x0 + 14, y + 46);
    txt(`Falta: ${faltaStr}   •   Progresso: ${progresso.toFixed(1)}%`, x0 + 14, y + 62);

    // barra
    const barX = x0 + 14;
    const barY = y + 86;
    const barW = leftW - 28;
    const barH = 10;

    doc.setFillColor(241, 245, 249);
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(1);
    doc.roundedRect(barX, barY, barW, barH, 999, 999, "FD");

    const fillW = Math.max(0, Math.min(barW*(progresso/100), barW));
    doc.setFillColor(C.brand[0], C.brand[1], C.brand[2]);
    doc.roundedRect(barX, barY, fillW, barH, 999, 999, "F");

    // etiqueta
    doc.setFillColor(235, 248, 255);
    doc.setDrawColor(186, 230, 253);
    doc.roundedRect(barX, barY + 16, 160, 20, 999, 999, "FD");
    setFont("bold", 9.5);
    doc.setTextColor(C.brand[0], C.brand[1], C.brand[2]);
    txt(`${progresso.toFixed(1)}% da meta`, barX + 80, barY + 31, { align:"center" });
    doc.setTextColor(C.ink[0], C.ink[1], C.ink[2]);

    // Card gráfico (mock premium)
    const gx = x0 + leftW + colGap;
    shadowCard(gx, y, rightW, cardH, 16);

    setFont("bold", 11.5);
    doc.setTextColor(C.ink[0], C.ink[1], C.ink[2]);
    txt("Visão rápida", gx + 14, y + 26);

    setFont("normal", 9.5);
    doc.setTextColor(C.muted[0], C.muted[1], C.muted[2]);
    txt("Entradas vs Saídas (mês)", gx + 14, y + 44);

    // mini gráfico (barras) proporcional
    const chartX = gx + 14;
    const chartY = y + 62;
    const chartW = rightW - 28;
    const chartH = 82;
    rrect(chartX, chartY, chartW, chartH, 12, [248, 250, 252], C.border, 1);

    const maxV = Math.max(entradas, saidas, 1);
    const inW = (chartW - 34) * (entradas / maxV);
    const outW = (chartW - 34) * (saidas / maxV);

    // barras horizontais estilo "executivo"
    doc.setFillColor(226, 232, 240);
    doc.roundedRect(chartX + 12, chartY + 22, chartW - 24, 10, 999, 999, "F");
    doc.roundedRect(chartX + 12, chartY + 48, chartW - 24, 10, 999, 999, "F");

    doc.setFillColor(C.success[0], C.success[1], C.success[2]);
    doc.roundedRect(chartX + 12, chartY + 22, Math.max(8, inW), 10, 999, 999, "F");

    doc.setFillColor(C.danger[0], C.danger[1], C.danger[2]);
    doc.roundedRect(chartX + 12, chartY + 48, Math.max(8, outW), 10, 999, 999, "F");

    setFont("bold", 9.2);
    doc.setTextColor(C.ink[0], C.ink[1], C.ink[2]);
    txt("Entradas", chartX + 12, chartY + 16);
    txt("Saídas", chartX + 12, chartY + 42);

    setFont("normal", 9.2);
    doc.setTextColor(C.muted[0], C.muted[1], C.muted[2]);
    txt(moneyBRAbs(entradas), chartX + chartW - 12, chartY + 30, { align:"right" });
    txt(moneyBRAbs(saidas), chartX + chartW - 12, chartY + 56, { align:"right" });

    y += cardH + 18;

    // ===== Tabela =====
    setFont("bold", 12);
    doc.setTextColor(C.ink[0], C.ink[1], C.ink[2]);
    txt("Lançamentos do mês", x0, y);

    const body = rows.map(r => {
      const tipo = (Number(r.valor || 0) >= 0) ? "Entrada" : "Saída";
      const valorStr = moneyBR(Number(r.valor || 0));
      return [
        formatISOToBR(r.dataISO || ""),
        tipo,
        (r.categoria || "Outros"),
        (r.descricao || "").toString(),
        valorStr
      ];
    });

    doc.autoTable({
      startY: y + 10,
      head: [["Data", "Tipo", "Categoria", "Descrição", "Valor"]],
      body,
      margin: { left: x0, right: x0 },
      styles: {
        font: "helvetica",
        fontSize: 9.0,
        cellPadding: 6,
        textColor: 30,
        lineColor: 236
      },
      headStyles: {
        fillColor: [12, 18, 38],
        textColor: 255,
        fontStyle: "bold"
      },
      alternateRowStyles: { fillColor: [248, 249, 251] },
      columnStyles: {
        0: { cellWidth: 70 },
        1: { cellWidth: 62 },
        2: { cellWidth: 108 },
        3: { cellWidth: contentW - (70+62+108+92) },
        4: { cellWidth: 92, halign: "right" }
      },
      didParseCell: function (data) {
        if (data.section === "body" && data.column.index === 4){
          const txtv = String(data.cell.raw || "");
          if (txtv.startsWith("-R$")) data.cell.styles.textColor = [200, 0, 0];
        }
      }
    });

    // Rodapé
    const finalY = doc.lastAutoTable ? doc.lastAutoTable.finalY : (pageH - 60);
    doc.setDrawColor(C.border[0], C.border[1], C.border[2]);
    doc.setLineWidth(1);
    doc.line(x0, finalY + 18, x0 + contentW, finalY + 18);

    setFont("normal", 9);
    doc.setTextColor(C.muted[0], C.muted[1], C.muted[2]);
    txt("Controle Premium • Relatório executivo", x0, finalY + 36);
    txt(`Mês: ${mk}`, x0 + contentW, finalY + 36, { align:"right" });

    doc.save(`relatorio_financeiro_${safeMonth}.pdf`);
    showToast("PDF ✅", "Relatório gerado no padrão Premium.");
  }

// ===== DASHBOARD =====
  function makeChartCommonOptions(){
    return {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { labels: { color: "rgba(226,232,240,.85)" } },
        tooltip: { callbacks: { label: (ctx) => `${ctx.dataset.label}: ${brl(ctx.raw)}` } }
      },
      scales: {
        x: { ticks: { color: "rgba(226,232,240,.70)" }, grid: { color: "rgba(148,163,184,.10)" } },
        y: { ticks: { color: "rgba(226,232,240,.70)", callback: (v) => brl(v) }, grid: { color: "rgba(148,163,184,.10)" } }
      }
    };
  }
  function buildDailySeries(fin){
    const endDay = fin.range?.endDay || 30;
    const daily = Array.from({length: endDay}, (_,i) => ({ day: i+1, total: 0 }));
    for (const r of fin.rows){
      const m = (r.dataISO || "").match(/^\d{4}-\d{2}-(\d{2})$/);
      if (!m) continue;
      const d = Number(m[1]);
      if (d >= 1 && d <= endDay) daily[d-1].total += Number(r.valor || 0);
    }
    let acc = 0;
    const labels = daily.map(x => String(x.day));
    const values = daily.map(x => (acc += x.total));
    return { labels, values };
  }
  function renderTopCategorias(fin){
    const map = new Map();
    for (const r of fin.rows){
      const cat = r.categoria || "Outros";
      if (!map.has(cat)) map.set(cat, { in: 0, out: 0 });
      const obj = map.get(cat);
      if (r.valor >= 0) obj.in += r.valor;
      else obj.out += Math.abs(r.valor);
    }
    const arr = Array.from(map.entries()).map(([cat, v]) => ({ cat, in: v.in, out: v.out }));
    arr.sort((a,b) => (b.out - a.out) || (b.in - a.in));
    const top = arr.slice(0, 7);
    topCatsBox.innerHTML = top.length ? top.map(x => `
      <div class="item" style="padding:10px 10px">
        <div class="leftcol">
          <div class="desc">${escapeHtml(x.cat)}</div>
          <div class="hint" style="margin:0">Entradas: ${brl(x.in)} • Saídas: ${brl(x.out)}</div>
        </div>
        <div class="amount">${brl(x.out > 0 ? -x.out : x.in)}</div>
      </div>
    `).join("") : `<div class="empty">Sem dados neste mês.</div>`;
    dashHintCats.textContent = top.length ? "Top categorias carregadas." : "Sem dados.";
  }
  function renderAlertsSimple(list){
    if (!list.length){
      dashAlerts.innerHTML = `<div class="empty">Sem alertas ✅</div>`;
      return;
    }
    dashAlerts.innerHTML = list.map(a => `
      <div class="catBox" style="margin:0">
        <div style="font-weight:900;margin-bottom:4px">${escapeHtml(a.title)}</div>
        <div class="hint" style="margin:0">${escapeHtml(a.msg)}</div>
      </div>
    `).join("");
  }
  async function fetchAggByMonths(userId, monthKeys){
    const valid = monthKeys.filter(Boolean);
    if (!valid.length) return { keys: [], byMonth: {} };
    const sorted = [...valid].sort((a,b) => {
      const pa = parseMonthKey(a), pb = parseMonthKey(b);
      if (!pa || !pb) return 0;
      if (pa.yyyy !== pb.yyyy) return pa.yyyy - pb.yyyy;
      return pa.mm - pb.mm;
    });
    const first = sorted[0], last = sorted[sorted.length-1];
    const r1 = monthStartEndISO(first), r2 = monthStartEndISO(last);
    const { data, error } = await supa
      .from("registros")
      .select("valor, data")
      .eq("user_id", userId)
      .gte("data", r1.start)
      .lte("data", r2.end);
    if (error) throw error;

    const byMonth = {};
    for (const k of valid) byMonth[k] = { entradas:0, saidas:0, saldo:0 };

    for (const row of (data || [])){
      const iso = row.data;
      const m = (iso || "").match(/^(\d{4})-(\d{2})-\d{2}$/);
      if (!m) continue;
      const mk = `${m[2]}/${m[1]}`;
      if (!byMonth[mk]) continue;
      const v = Number(row.valor || 0);
      byMonth[mk].saldo += v;
      if (v >= 0) byMonth[mk].entradas += v;
      else byMonth[mk].saidas += Math.abs(v);
    }
    return { keys: valid, byMonth };
  }
  async function refreshDashboard(){
    if (!currentUser) return;
    const dashMk = dashboardMonth || currentMonth || getDefaultMonth();
    try{
      const fin = await fetchRegistrosByMonth(currentUser.id, dashMk);
      dashMonthLabel.textContent = `Mês: ${dashMk}`;
      dashTitleSub.textContent = chkComparar.checked ? "Mês do Dashboard + comparação" : "Somente mês do Dashboard";

      dashEntradas.textContent = brl(fin.entradas);
      dashSaidas.textContent = brl(fin.saidas);
      dashSaldo.textContent = brl(fin.saldo);
      dashSaldo.className = "v " + (fin.saldo >= 0 ? "green" : "red");
      dashQtd.textContent = String(fin.rows.length);
      dashHintResumo.textContent = "Resumo carregado.";
      renderTopCategorias(fin);

      const alerts = [];
      const p = parseMonthKey(dashMk);
      const diasRest = p ? remainingDays(p.mm, p.yyyy) : 30;

      let meta = 0;
      try{ meta = await getMeta(currentUser.id, dashMk); }catch(e){ meta = 0; }

      if (meta > 0){
        if (fin.entradas >= meta) alerts.push({ title:"✅ Meta batida!", msg:`Você fez ${brl(fin.entradas)} (meta ${brl(meta)}).` });
        else {
          const falta = Math.max(meta - fin.entradas, 0);
          const porDia = diasRest > 0 ? (falta / diasRest) : falta;
          alerts.push({ title:"🎯 Ritmo da meta", msg:`Faltam ${brl(falta)} • ~${brl(porDia)}/dia.` });
        }
      } else alerts.push({ title:"ℹ️ Meta não definida", msg:`Defina uma meta para ${dashMk} na aba Metas.` });

      if (fin.saldo < 0) alerts.push({ title:"💸 Saldo negativo", msg:`Saldo do mês: ${brl(fin.saldo)}.` });
      else if (fin.rows.length) alerts.push({ title:"💰 Saldo", msg:`Saldo do mês: ${brl(fin.saldo)}.` });

      renderAlertsSimple(alerts);
      dashHintAlerts.textContent = "Alertas atualizados.";

      const daily = buildDailySeries(fin);
      const ctxD = document.getElementById("chartDiario");
      if (!chartDiario){
        chartDiario = new Chart(ctxD, {
          type: "line",
          data: { labels: daily.labels, datasets: [{ label: "Saldo acumulado", data: daily.values, tension: 0.25 }] },
          options: makeChartCommonOptions()
        });
      } else {
        chartDiario.data.labels = daily.labels;
        chartDiario.data.datasets[0].data = daily.values;
        chartDiario.update();
      }
      dashHintDiario.textContent = "Gráfico diário atualizado.";

      const ctxC = document.getElementById("chartComparacao");
      if (!chartComparacao){
        chartComparacao = new Chart(ctxC, {
          type: "bar",
          data: { labels: [], datasets: [
            { label: "Entradas", data: [] },
            { label: "Saídas", data: [] },
            { label: "Saldo", data: [] },
          ]},
          options: makeChartCommonOptions()
        });
      }
      if (!chkComparar.checked){
        chartComparacao.data.labels = [];
        chartComparacao.data.datasets.forEach(d => d.data = []);
        chartComparacao.update();
        return;
      }

      const selected = Array.from(dashMonthsMulti.selectedOptions).map(o => o.value).filter(Boolean);
      const months = selected.length ? selected : [dashMk];
      const agg = await fetchAggByMonths(currentUser.id, months);

      chartComparacao.data.labels = agg.keys;
      chartComparacao.data.datasets[0].data = agg.keys.map(k => agg.byMonth[k]?.entradas || 0);
      chartComparacao.data.datasets[1].data = agg.keys.map(k => agg.byMonth[k]?.saidas || 0);
      chartComparacao.data.datasets[2].data = agg.keys.map(k => agg.byMonth[k]?.saldo || 0);
      chartComparacao.update();
      dashHintComparacao.textContent = `Comparando ${agg.keys.length} mês(es).`;
    }catch(e){
      showToast("Dashboard", e.message || String(e));
    }
  }

  // ===== OFX =====
  function normalizeOfxText(raw){
    let t = raw.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
    const idx = t.toUpperCase().indexOf("<OFX>");
    if (idx >= 0) t = t.slice(idx);
    return t;
  }
  function getTagValue(block, tag){
    const up = block.toUpperCase();
    const t = tag.toUpperCase();
    const i = up.indexOf("<" + t + ">");
    if (i < 0) return "";
    const start = i + t.length + 2;
    let end = block.indexOf("<", start);
    if (end < 0) end = block.length;
    let v = block.slice(start, end);
    v = v.replace(/\n/g, " ").trim();
    return v;
  }
  function parseOfxDateToISO(dt){
    const s = (dt || "").trim();
    const m = s.match(/^(\d{4})(\d{2})(\d{2})/);
    if (!m) return null;
    return `${m[1]}-${m[2]}-${m[3]}`;
  }
  function parseOfx(text){
    const t = normalizeOfxText(text);
    const blocks = t.split(/<STMTTRN>/i).slice(1);
    const rows = [];
    for (const b of blocks){
      const dt = getTagValue(b, "DTPOSTED") || getTagValue(b, "DTUSER");
      const iso = parseOfxDateToISO(dt);
      const amtStr = getTagValue(b, "TRNAMT");
      const memo = getTagValue(b, "MEMO") || getTagValue(b, "NAME") || "Lançamento OFX";
      const fitid = getTagValue(b, "FITID");
      const amt = Number(String(amtStr || "").replace(",", "."));
      if (!iso || !Number.isFinite(amt)) continue;
      rows.push({
        id: fitid || (iso + "_" + Math.random().toString(16).slice(2)),
        ok: true,
        dataISO: iso,
        tipo: amt >= 0 ? "entrada" : "saida",
        valor: Math.abs(amt),
        categoria: "Outros",
        descricao: memo.slice(0, 140),
      });
    }
    return rows;
  }
  function openOfxModal(rows){
    ofxRows = rows;
    ofxOverlay.classList.add("show");
    renderOfxTable();
  }
  function closeOfxModal(){
    ofxOverlay.classList.remove("show");
    ofxRows = [];
  }
  function renderOfxTable(){
    ofxCount.textContent = `${ofxRows.length} itens`;
    if (!ofxRows.length){
      ofxTbody.innerHTML = `<tr><td colspan="6" class="empty">Nenhuma transação encontrada.</td></tr>`;
      return;
    }
    ofxTbody.innerHTML = ofxRows.map((r, idx) => `
      <tr data-i="${idx}">
        <td class="ofxCheck"><input type="checkbox" data-ofx-ok ${r.ok ? "checked" : ""}></td>
        <td class="ofxDate"><input class="ofxDate" data-ofx-date value="${escapeHtml(formatISOToBR(r.dataISO))}" placeholder="DD/MM/AAAA"></td>
        <td>
          <select data-ofx-tipo>
            <option value="entrada" ${r.tipo==="entrada"?"selected":""}>Entrada</option>
            <option value="saida" ${r.tipo==="saida"?"selected":""}>Saída</option>
          </select>
        </td>
        <td class="ofxMoney"><input class="ofxMoney" data-ofx-valor type="number" value="${escapeHtml(String(r.valor))}"></td>
        <td>
          <select data-ofx-cat>
            <option value="Vendas">Vendas</option>
            <option value="Tráfego">Tráfego</option>
            <option value="Fornecedor">Fornecedor</option>
            <option value="Embalagem">Embalagem</option>
            <option value="Frete/Logística">Frete/Logística</option>
            <option value="Impostos/Taxas">Impostos/Taxas</option>
            <option value="Mercado">Mercado</option>
            <option value="Lazer">Lazer</option>
            <option value="Outros" selected>Outros</option>
          </select>
        </td>
        <td><input class="ofxDesc" data-ofx-desc value="${escapeHtml(r.descricao)}"></td>
      </tr>
    `).join("");
    for (const tr of ofxTbody.querySelectorAll("tr")){
      const i = Number(tr.dataset.i);
      const sel = tr.querySelector("[data-ofx-cat]");
      if (sel) sel.value = ofxRows[i].categoria || "Outros";
    }
  }
  function syncOfxFromTable(){
    for (const tr of ofxTbody.querySelectorAll("tr")){
      const i = Number(tr.dataset.i);
      const ok = tr.querySelector("[data-ofx-ok]")?.checked ?? true;
      const dateBR = tr.querySelector("[data-ofx-date]")?.value ?? "";
      const tipo = tr.querySelector("[data-ofx-tipo]")?.value ?? "entrada";
      const valor = Number(tr.querySelector("[data-ofx-valor]")?.value ?? 0);
      const cat = tr.querySelector("[data-ofx-cat]")?.value ?? "Outros";
      const desc = tr.querySelector("[data-ofx-desc]")?.value ?? "";
      const iso = parseBRDateToISO(dateBR);
      ofxRows[i].ok = ok;
      ofxRows[i].tipo = tipo;
      ofxRows[i].valor = valor;
      ofxRows[i].categoria = cat;
      ofxRows[i].descricao = desc;
      ofxRows[i].dataISO = iso || ofxRows[i].dataISO;
    }
  }
  async function confirmOfx(){
    if (!currentUser) return;
    syncOfxFromTable();
    const bankId = (ofxBancoSelect.value || bancoSelect.value || "").trim() || null;

    const toInsert = [];
    for (const r of ofxRows){
      if (!r.ok) continue;
      if (!r.dataISO || !r.descricao || !Number.isFinite(Number(r.valor)) || Number(r.valor) <= 0) continue;
      const mesAuto = monthKeyFromDateObj(new Date(r.dataISO + "T00:00:00"));
      const valorFinal = (r.tipo === "saida") ? -Math.abs(Number(r.valor)) : Math.abs(Number(r.valor));
      toInsert.push({
        user_id: currentUser.id,
        descricao: r.descricao.trim(),
        valor: valorFinal,
        data: r.dataISO,
        mes: mesAuto,
        categoria: (r.categoria || "Outros").trim() || "Outros",
        banco_id: bankId ? Number(bankId) : null
      });
    }
    if (!toInsert.length){ showToast("OFX", "Nenhum lançamento selecionado."); return; }

    btnOfxConfirmar.disabled = true;
    btnOfxConfirmar.textContent = "Confirmando…";
    try{
      const chunkSize = 200;
      for (let i=0;i<toInsert.length;i+=chunkSize){
        const chunk = toInsert.slice(i, i+chunkSize);
        const { error } = await supa.from("registros").insert(chunk);
        if (error) throw error;
      }
      showToast("OFX ✅", `${toInsert.length} lançamentos adicionados.`);
      closeOfxModal();
      await refreshUI();
      if (!dashboardBox.classList.contains("hidden")) await refreshDashboard();
    }catch(e){
      showToast("OFX", e.message || String(e));
    }finally{
      btnOfxConfirmar.disabled = false;
      btnOfxConfirmar.textContent = "Confirmar lançamentos";
    }
  }

  // ===== CSV IMPORT =====
  function cleanMoneyToNumber(str){
    let s = String(str ?? "").trim();
    if (!s) return NaN;
    s = s.replace(/\s/g, "");
    s = s.replace("R$", "").replace("r$", "");
    if (s.includes(",")){
      s = s.replace(/\./g, "");
      s = s.replace(",", ".");
    }
    s = s.replace(/[^0-9.-]/g, "");
    return Number(s);
  }
  function parseCSV(text){
    const lines = text.replace(/\r\n/g,"\n").replace(/\r/g,"\n").split("\n").filter(l => l.trim() !== "");
    if (!lines.length) return { header: [], rows: [] };
    const first = lines[0];
    const sep = (first.split(";").length >= 3) ? ";" : ",";
    const header = first.split(sep).map(x => x.trim().replace(/^"|"$/g,""));
    const rows = [];
    for (let i=1;i<lines.length;i++){
      const raw = lines[i];
      const cols = raw.split(sep).map(x => x.trim().replace(/^"|"$/g,"").replace(/""/g,'"'));
      if (cols.every(c => c === "")) continue;
      rows.push(cols);
    }
    return { header, rows, sep };
  }
  function mapColumns(header){
    const norm = header.map(h => h.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""));
    const idx = (name) => norm.indexOf(name);
    const d = idx("descricao") >= 0 ? idx("descricao") : idx("descrição");
    return { data: idx("data"), tipo: idx("tipo"), categoria: idx("categoria"), descricao: d, valor: idx("valor") };
  }
  async function importCSVFile(file){
    if (!currentUser){ showToast("Importar", "Faça login primeiro."); return; }
    const text = await file.text();
    const parsed = parseCSV(text);
    if (!parsed.rows.length){ showToast("Importar", "Arquivo vazio ou inválido."); return; }

    const col = mapColumns(parsed.header);
    if ([col.data,col.tipo,col.categoria,col.descricao,col.valor].some(x => x < 0)){
      showToast("Importar", "Cabeçalho inválido. Use: Data;Tipo;Categoria;Descrição;Valor");
      return;
    }

    let ok = 0, bad = 0;
    const inserts = [];
    let latestISO = null;
    const bankId = (bancoSelect.value || "").trim() || null;

    for (const r of parsed.rows){
      const dataBR = r[col.data] ?? "";
      const tipoRaw = (r[col.tipo] ?? "").trim().toLowerCase();
      const categoria = (r[col.categoria] ?? "Outros").trim() || "Outros";
      const descricao = (r[col.descricao] ?? "").trim();
      const valorRaw = r[col.valor];

      const dataISO = parseBRDateToISO(dataBR);
      if (!dataISO || !descricao){ bad++; continue; }

      let valor = cleanMoneyToNumber(valorRaw);
      if (!Number.isFinite(valor) || valor === 0){ bad++; continue; }

      const tipo = (tipoRaw.includes("saida") || tipoRaw.includes("saída") || tipoRaw === "out" || tipoRaw === "despesa") ? "saida" : "entrada";
      const valorFinal = (tipo === "saida") ? -Math.abs(valor) : Math.abs(valor);

      const mesAuto = monthKeyFromDateObj(new Date(dataISO + "T00:00:00"));

      inserts.push({
        user_id: currentUser.id,
        data: dataISO,
        mes: mesAuto,
        categoria,
        descricao,
        valor: valorFinal,
        banco_id: bankId ? Number(bankId) : null
      });

      ok++;
      if (!latestISO || dataISO > latestISO) latestISO = dataISO;
    }

    if (!inserts.length){ showToast("Importar", "Nenhuma linha válida encontrada."); return; }

    importInfo.textContent = `Importando… (${ok} válidas, ${bad} inválidas)`;
    try{
      const chunkSize = 200;
      let inserted = 0;
      for (let i=0;i<inserts.length;i+=chunkSize){
        const chunk = inserts.slice(i, i+chunkSize);
        const { error } = await supa.from("registros").insert(chunk);
        if (error) throw error;
        inserted += chunk.length;
      }
      if (latestISO) currentMonth = monthKeyFromDateObj(new Date(latestISO + "T00:00:00"));
      importInfo.textContent = `✅ Importado: ${inserted} lançamentos • Ignorados: ${bad}`;
      showToast("CSV ✅", `${inserted} lançamentos importados.`);
      await refreshUI();
      if (!dashboardBox.classList.contains("hidden")) await refreshDashboard();
    }catch(e){
      importInfo.textContent = "Falha ao importar.";
      showToast("Importar", e.message || String(e));
    }
  }

  // ===== LISTENERS =====
  tabFin.addEventListener("click", () => forceShowFinancas());
  tabMeta.addEventListener("click", async () => { showMetas(); await atualizarMetasUI(currentMonth); });
  tabDash.addEventListener("click", async () => { showDashboard(); await refreshDashboard(); });

  btnLogin.addEventListener("click", async () => {
    const { error } = await supa.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: window.location.origin }
    });
    if (error) showToast("Login", error.message);
  });

  btnSair.addEventListener("click", async () => {
    await supa.auth.signOut();
    location.href = "/";
  });

  mesSelect.addEventListener("change", async () => {
    if (!currentUser) return;
    currentMonth = mesSelect.value;
    metaMesEl.value = currentMonth;
    await refreshUI();
  });

  filtroCategoriaEl.addEventListener("change", async () => {
    currentFiltroCategoria = filtroCategoriaEl.value;
    await refreshUI();
  });

  buscaEl.addEventListener("input", () => {
    currentSearch = buscaEl.value;
    if (lastFinCache) renderFinancas(lastFinCache);
  });

  btnSalvar.addEventListener("click", async () => {
    if (!currentUser){ showLogin(); return; }

    const tipo = tipoEl.value;
    const dataBR = dataEl.value.trim();
    const dataISO = parseBRDateToISO(dataBR);
    const valorDigitado = Number(valorEl.value);
    const descricao = descricaoEl.value.trim();
    const categoria = (categoriaEl.value || "Outros").trim();
    const bankId = (bancoSelect.value || "").trim();

    if (!dataISO){ showToast("Data inválida", "Use DD/MM/AAAA."); return; }
    if (!descricao){ showToast("Descrição", "Preencha a descrição."); return; }
    if (Number.isNaN(valorDigitado) || valorDigitado <= 0){ showToast("Valor", "Digite um valor positivo."); return; }

    const valorFinal = (tipo === "saida") ? -Math.abs(valorDigitado) : Math.abs(valorDigitado);
    const mesAuto = monthKeyFromDateObj(new Date(dataISO + "T00:00:00"));

    const { error } = await supa.from("registros").insert({
      user_id: currentUser.id,
      descricao,
      valor: valorFinal,
      data: dataISO,
      mes: mesAuto,
      categoria,
      banco_id: bankId ? Number(bankId) : null
    });

    if (error){ showToast("Não salvou", error.message); return; }

    descricaoEl.value = "";
    valorEl.value = "";
    currentMonth = mesAuto;

    await refreshUI();
    if (!dashboardBox.classList.contains("hidden")) await refreshDashboard();
  });

  btnExportar.addEventListener("click", () => {
    if (!lastFinCache || !lastFinCache.rows) { showToast("Exportar", "Sem dados para exportar."); return; }
    let rows = lastFinCache.rows;
    if (currentFiltroCategoria && currentFiltroCategoria !== "Todas"){
      rows = rows.filter(r => (r.categoria || "Outros") === currentFiltroCategoria);
    }
    const q = (currentSearch || "").trim().toLowerCase();
    if (q) rows = rows.filter(r => (r.descricao || "").toLowerCase().includes(q));
    if (!rows.length){ showToast("Exportar", "Não há registros neste filtro/busca."); return; }

    const csv = makeCSV(rows);
    const safeMonth = (currentMonth || "mes").replace("/", "-");
    const filename = `controle-premium_${safeMonth}.csv`;
    downloadCSV(csv, filename);
    showToast("Exportado ✅", `Arquivo: ${filename}`);
  });

  // PDF
  btnPdf.addEventListener("click", generatePDFClassic);

  // Editar / Excluir
  function openDeleteModal(item){
    pendingDelete = item;
    modalBody.innerHTML = `Excluir este lançamento?<br><br><b>${escapeHtml(item.descricao || "")}</b><br>${escapeHtml(formatISOToBR(item.dataISO || ""))} • ${escapeHtml(item.categoria || "Outros")} • <b>${brl(item.valor)}</b>`;
    modalOverlay.classList.add("show");
  }
  function closeDeleteModal(){ modalOverlay.classList.remove("show"); pendingDelete = null; }

  function openEditModal(item){
    editingItem = item;
    editDataEl.value = formatISOToBR(item.dataISO || "");
    editTipoEl.value = (Number(item.valor) >= 0) ? "entrada" : "saida";
    editValorEl.value = Math.abs(Number(item.valor || 0));
    editCategoriaEl.value = item.categoria || "Outros";
    editDescricaoEl.value = item.descricao || "";
    editBancoSelect.value = item.banco_id || "";
    editOverlay.classList.add("show");
  }
  function closeEditModal(){ editOverlay.classList.remove("show"); editingItem = null; }

  listaEl.addEventListener("click", (e) => {
    const delBtn = e.target.closest("[data-del]");
    const editBtn = e.target.closest("[data-edit]");
    if (delBtn){
      openDeleteModal({
        id: delBtn.dataset.id,
        descricao: delBtn.dataset.desc || "",
        valor: Number(delBtn.dataset.valor || 0),
        dataISO: delBtn.dataset.data || "",
        categoria: delBtn.dataset.cat || "Outros"
      });
      return;
    }
    if (editBtn){
      openEditModal({
        id: editBtn.dataset.id,
        descricao: editBtn.dataset.desc || "",
        valor: Number(editBtn.dataset.valor || 0),
        dataISO: editBtn.dataset.data || "",
        categoria: editBtn.dataset.cat || "Outros",
        banco_id: editBtn.dataset.bankid || ""
      });
    }
  });

  btnModalClose.addEventListener("click", closeDeleteModal);
  btnCancelar.addEventListener("click", closeDeleteModal);
  modalOverlay.addEventListener("click", (e) => { if (e.target === modalOverlay) closeDeleteModal(); });

  btnConfirmar.addEventListener("click", async () => {
    if (!currentUser || !pendingDelete) return;
    try{
      const { error } = await supa.from("registros").delete().eq("id", pendingDelete.id).eq("user_id", currentUser.id);
      if (error) throw error;
      closeDeleteModal();
      showToast("Excluído ✅", "Lançamento removido.");
      await refreshUI();
      if (!dashboardBox.classList.contains("hidden")) await refreshDashboard();
    }catch(err){
      showToast("Excluir", err.message || String(err));
    }
  });

  btnEditClose.addEventListener("click", closeEditModal);
  btnEditCancelar.addEventListener("click", closeEditModal);
  editOverlay.addEventListener("click", (e) => { if (e.target === editOverlay) closeEditModal(); });

  btnEditSalvar.addEventListener("click", async () => {
    if (!currentUser || !editingItem) return;

    const dataISO = parseBRDateToISO(editDataEl.value.trim());
    if (!dataISO){ showToast("Data", "Use DD/MM/AAAA."); return; }

    const valorDigitado = Number(editValorEl.value);
    if (!Number.isFinite(valorDigitado) || valorDigitado <= 0){ showToast("Valor", "Digite um valor positivo."); return; }

    const tipo = editTipoEl.value;
    const valorFinal = (tipo === "saida") ? -Math.abs(valorDigitado) : Math.abs(valorDigitado);

    const desc = editDescricaoEl.value.trim();
    if (!desc){ showToast("Descrição", "Preencha a descrição."); return; }

    const cat = (editCategoriaEl.value || "Outros").trim() || "Outros";
    const bankId = (editBancoSelect.value || "").trim() || null;
    const mesAuto = monthKeyFromDateObj(new Date(dataISO + "T00:00:00"));

    try{
      const { error } = await supa.from("registros").update({
        data: dataISO,
        mes: mesAuto,
        valor: valorFinal,
        descricao: desc,
        categoria: cat,
        banco_id: bankId ? Number(bankId) : null
      }).eq("id", editingItem.id).eq("user_id", currentUser.id);

      if (error) throw error;

      closeEditModal();
      showToast("Salvo ✅", "Alterações aplicadas.");
      currentMonth = mesAuto;
      await refreshUI();
      if (!dashboardBox.classList.contains("hidden")) await refreshDashboard();
    }catch(err){
      showToast("Editar", err.message || String(err));
    }
  });

  // CSV
  btnImportar.addEventListener("click", () => fileCsv.click());
  fileCsv.addEventListener("change", async () => {
    const f = fileCsv.files && fileCsv.files[0];
    if (f) await importCSVFile(f);
    fileCsv.value = "";
  });
  dropZone.addEventListener("dragover", (e) => { e.preventDefault(); dropZone.style.borderColor = "rgba(0,194,255,.65)"; });
  dropZone.addEventListener("dragleave", () => { dropZone.style.borderColor = "rgba(0,194,255,.35)"; });
  dropZone.addEventListener("drop", async (e) => {
    e.preventDefault();
    dropZone.style.borderColor = "rgba(0,194,255,.35)";
    const f = e.dataTransfer.files && e.dataTransfer.files[0];
    if (f) await importCSVFile(f);
  });

  // OFX
  btnImportarOfx.addEventListener("click", () => fileOfx.click());
  fileOfx.addEventListener("change", async () => {
    const f = fileOfx.files && fileOfx.files[0];
    if (!f) return;
    try{
      const text = await f.text();
      const rows = parseOfx(text);
      if (!rows.length) showToast("OFX", "Não encontrei transações nesse OFX.");
      else {
        ofxInfo.textContent = `Arquivo carregado: ${f.name} • ${rows.length} transações`;
        openOfxModal(rows);
      }
    }catch(e){
      showToast("OFX", e.message || String(e));
    }finally{
      fileOfx.value = "";
    }
  });

  btnOfxClose.addEventListener("click", closeOfxModal);
  btnOfxCancelar.addEventListener("click", closeOfxModal);
  ofxOverlay.addEventListener("click", (e) => { if (e.target === ofxOverlay) closeOfxModal(); });

  btnOfxSelectAll.addEventListener("click", () => { for (const r of ofxRows) r.ok = true; renderOfxTable(); });
  btnOfxUnselectAll.addEventListener("click", () => { for (const r of ofxRows) r.ok = false; renderOfxTable(); });
  btnOfxConfirmar.addEventListener("click", confirmOfx);

  // Bancos
  btnGerenciarBancos.addEventListener("click", async () => {
    if (!currentUser) return;
    try{
      await loadBanks();
      fillBankSelects();
      openBankModal();
    }catch(e){
      showToast("Bancos", e.message || String(e));
    }
  });
  btnBankClose.addEventListener("click", closeBankModal);
  btnBankFechar2.addEventListener("click", closeBankModal);
  bankOverlay.addEventListener("click", (e) => { if (e.target === bankOverlay) closeBankModal(); });

  btnBankAdd.addEventListener("click", async () => {
    if (!currentUser) return;
    const nome = (bankNome.value || "").trim();
    if (!nome){ showToast("Bancos", "Digite o nome do banco."); return; }
    try{
      const { error } = await supa.from("bancos").insert({ user_id: currentUser.id, nome });
      if (error) throw error;
      bankNome.value = "";
      await loadBanks();
      fillBankSelects();
      renderBankList();
      showToast("Bancos ✅", "Banco adicionado.");
    }catch(e){
      showToast("Bancos", e.message || String(e));
    }
  });

  bankList.addEventListener("click", async (e) => {
    const btn = e.target.closest("[data-bank-del]");
    if (!btn) return;
    const id = btn.dataset.id;
    try{
      const { error } = await supa.from("bancos").delete().eq("id", id).eq("user_id", currentUser.id);
      if (error) throw error;
      await loadBanks();
      fillBankSelects();
      renderBankList();
      showToast("Bancos ✅", "Banco excluído.");
    }catch(err){
      showToast("Bancos", err.message || String(err));
    }
  });

  // Dashboard controls
  chkComparar.addEventListener("change", async () => {
    multiMonthsWrap.classList.toggle("hidden", !chkComparar.checked);
    await refreshDashboard();
  });
  dashQuickRange.addEventListener("change", () => {
    const n = Number(dashQuickRange.value || 0);
    if (!n) return;
    const keys = getLastNMonthKeys(n);
    const set = new Set(keys);
    for (const opt of dashMonthsMulti.options) opt.selected = set.has(opt.value);
  });
  btnAplicarComparacao.addEventListener("click", async () => {
    chkComparar.checked = true;
    multiMonthsWrap.classList.remove("hidden");
    await refreshDashboard();
  });
  dashMesSelect.addEventListener("change", async () => {
    dashboardMonth = dashMesSelect.value;
    await refreshDashboard();
  });

  // ===== REFRESH UI =====
  async function refreshUI(){
    const { data } = await supa.auth.getSession();
    const session = data.session;

    if (!session){
      currentUser = null;
      showLogin();
      return;
    }

    currentUser = session.user;
    showApp(session.user.email);

    if (!dataEl.value) dataEl.value = getTodayBR();

    try{
      await loadBanks();
      fillBankSelects();
    }catch(e){
      bancoSelect.innerHTML = `<option value="">— Sem banco (opcional) —</option>`;
      editBancoSelect.innerHTML = `<option value="">— Sem banco (opcional) —</option>`;
      ofxBancoSelect.innerHTML = `<option value="">— Sem banco (opcional) —</option>`;
    }

    let months = [getDefaultMonth()];
    try{
      months = months.concat(await fetchMonthsFromRegistros(currentUser.id));
    }catch(e){}

    const desiredFin = currentMonth || getDefaultMonth();
    fillMonthDropdown(mesSelect, months, desiredFin);
    currentMonth = mesSelect.value || getDefaultMonth();

    const desiredDash = dashboardMonth || currentMonth;
    fillMonthDropdown(dashMesSelect, months, desiredDash);
    dashboardMonth = dashMesSelect.value || desiredDash;

    fillDashboardMulti(months);
    metaMesEl.value = currentMonth;

    try{
      const fin = await fetchRegistrosByMonth(currentUser.id, currentMonth);
      fillCategoriaFilter(fin.categorias.length ? fin.categorias : ["Vendas","Outros"], currentFiltroCategoria);
      renderFinancas(fin);
    }catch(e){
      showToast("Finanças", e.message || String(e));
      listaEl.innerHTML = `<div class="empty">Falha ao carregar registros.</div>`;
    }

    try{ await atualizarMetasUI(currentMonth); }catch(e){}

    if (!dashboardBox.classList.contains("hidden")){
      await refreshDashboard();
    }
  }

  // Init
  (async () => {
       if (!dataEl.value) dataEl.value = getTodayBR();
    currentFiltroCategoria = "Todas";
    currentSearch = "";
    currentMonth = getDefaultMonth();
    dashboardMonth = currentMonth;
    await refreshUI();
  })();

  supa.auth.onAuthStateChange(async () => {
    await refreshUI();
  });

  // Meta save
  btnSalvarMeta.addEventListener("click", async () => {
    if (!currentUser) return;
    const mes = (metaMesEl.value || "").trim();
    const meta = Number(metaValorEl.value || 0);
    if (!/^\d{2}\/\d{4}$/.test(mes)){ showToast("Meta", "Use MM/AAAA"); return; }
    if (!Number.isFinite(meta) || meta < 0){ showToast("Meta", "Digite um valor válido."); return; }
    try{
      await upsertMeta(currentUser.id, mes, meta);
      showToast("Meta ✅", "Meta salva.");
      await atualizarMetasUI(currentMonth);
      if (!dashboardBox.classList.contains("hidden")) await refreshDashboard();
    }catch(e){
      showToast("Meta", e.message || String(e));
    }
  });
