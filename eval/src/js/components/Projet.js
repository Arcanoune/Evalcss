export default function Projet(datas){
    return{
        tag: '',
        href: '',
        datas: [],
        baseDatas: [],
        init() {
            fetch('./public/data.json')
                .then(response => response.json())
                .then(data => {
                    this.datas = this.baseDatas = data;
                })
                .catch(error => console.error('Erreur de chargement:', error));
        },

        tagValues(){
            return[...new Set(this.datas.map(data=>data.tag))].sort();
        },

        hrefValues(){
            return[...new Set(this.datas.map(data=>data.href))].sort();
        },

        filterProjet() {
            this.datas = this.baseDatas.filter(data => {
                let tagMatches = this.tag !== '' ? (data.tag === this.tag) : true;
                let hrefMatches = this.href !== '' ? (data.href === this.href) : true;
                return tagMatches && hrefMatches;
            });
        }
    }
}
