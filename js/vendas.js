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
