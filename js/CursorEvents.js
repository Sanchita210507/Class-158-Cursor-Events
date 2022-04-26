AFRAME.registerComponent("cursor-listener", {
     schema: {
       selectedItemId: { default: "", type: "string" },
     },
     
     init: function () {
       this.handleMouseEnterEvents()
       this.mouseLeaveEvents()
     },

     handlePlacesListState: function () {
       const id = this.el.getAttribute("id");
       const placesId = ["taj-mahal", "budapest", "new-york-city", "eiffel-tower"];

       if(placesId.includes(id)){
           const placeContainer = document.querySelector("#places-container")
           placeContainer.setAttribute("cursor-listener",{selectedItemId : id})
           this.el.setAttribute("material", {color : "orange", opacity : 1})
       }
      
     },
     
     handleMouseEnterEvents:function(){
         this.el.addEventListener("mouseenter",()=>{
             this.handlePlacesListState()
         })
     },

     mouseLeaveEvents:function(){
        this.el.addEventListener("mouseleave", ()=>{
         const {selectedItemId }=this.data
         //this.data.selectedItemId
            console.log(selectedItemId)

          /*check schema & then get the selected element(a-entity) and store it in the “el” variable*/

          if(selectedItemId){
            const el = document.querySelector(`#${selectedItemId}`)
            
            console.log(el)

            const id = el.getAttribute("id")

            if(id == selectedItemId){
                el.setAttribute("material", {color : "black", opacity : 1})
            }
          }
     
        })
     }
     
   });
   