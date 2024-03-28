console.log("radi");

// objekti u js-u se pisi tako sto kazemo {}

// const predavac = {
// ime_prezime: 'Pera Peric',
// godine: 30,
// predmet: 'WSIT'

// }

const app = Vue.createApp({
  data() {
    return {
      message: "Uvod u vue js",
      omiljeni_broj: 30,
      // ime: 'Pera',
      // prezime: 'Peric',
      // predmet: 'WSIT',
      predavac: {
        ime: "Pera",
        prezime: "Peric",
        predmeti: ["WSIT", "DIRWS", "IS"],
        godine: 30,
      },
      predmet: "",
      greska: "",
      radi: "",
    };
  },
  methods: {
    promeniMessage() {
      this.message = "Promenjeno!";
    },
    smanjiGodine() {
      // self u pythonu
      // js koristi this umesto self
      this.predavac.godine--;
    },
    povecajGodine() {
      // self u pythonu
      // js koristi this umesto self
      this.predavac.godine++;
    },
    dodajPredmet() {
      // append
      // js ima push
      if (this.predmet == "") {
        console.log("predmet ne moze biti prazan string!");
        this.greska = "predmet ne moze biti prazan string!";
        return;
      }
      this.greska = "";
      this.predavac.predmeti.push(this.predmet);
      this.predmet = "";
      this.radi = "Uspesno dodat predmet!";
    },
    obrisiPredmet(indeks) {
      // kao fstring u pythonu
      console.log(`kliknuli ste na ${indeks} predmet`);
      // splice je methoda koju imaju liste u jsu i sluzi za brisanje elemenata liste
      // ova metoda prihvata 2 vrednosti
      // 1. pocetni indeks
      // 2. koliko vrednosti brisemo
      this.predavac.predmeti.splice(indeks, 1);
    },
    funkcijaVratiImePrezime() {
      return `${this.predavac.ime} ${this.predavac.prezime}`;
    },
  },
  computed: {
    vratiImePrezime() {
      // return this.predavac.ime + ' ' + this.predavac.prezime
      return `${this.predavac.ime} ${this.predavac.prezime}`;
    },
  },
  mounted() {
    console.log("before create");
    this.promeniMessage();
    console.log(this.message);
  },
});

app.component("izlistaj-predmete", {
  props: {
    predmeti: {
      type: Array,
      required: true,
    },
  },
  methods: {
    obrisiPredmet(indeks) {
      console.log(`kliknuli ste na ${indeks} predmet`);

      this.predmeti.splice(indeks, 1);
    },
  },
  template: `<ul>
                <li v-for="predmet in predmeti">
                {{predmet}}
                <button @click="obrisiPredmet(predmet)">Obrisi</button>
                </li>
              </ul>`,
});

app.mount("#app");
