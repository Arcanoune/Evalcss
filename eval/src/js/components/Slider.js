export default function Slider(images){
    return{
        currentSlide: 0,
        images:[],
        init(){
            for (let i=0; i<images.length; i++){
                this.images.push({
                    id:i,
                    src: images[i],
                });
            }
        },
        
        next(){
            if(this.currentSlide < this.images.length-1) {
                return this.currentSlide = this.currentSlide + 1
            } else{
                return this.currentSlide = 0
            }
        },
        
        back(){
            if(this.currentSlide > 0){
                return this.currentSlide = this.currentSlide-1
            } else{
                return this.currentSlide = this.images.length-1
            }
        }
    }
}
