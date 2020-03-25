
export default {
 

    template: `

    <section id="modal-template" class="modal">

    <!-- Modal content -->
    <div class="modal-content">
      <p>Are you the age of 18 or over?</p>
      
      <button id="show-modal" @click="showModal = true">Show Modal</button>
      <button v-on:click="enter" type="button" id="yes">Yes</button>
      <button type="button" id="no">No</button>

    </div>
  
    </section>
   
    `,

    methods: {
        enter(){
            divTest = document.getElementById('myModal');
            divTest.style.display === "none";
        }
        
    }
    


}