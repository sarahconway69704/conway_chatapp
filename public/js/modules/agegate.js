
export default {
 

    template: `

    <div class="modal-content">
    
      <p id="eighteen">Are you the age of 18 or over?</p>
    <p id="tooYoung" class="nope">You're not old enough to access this chat, kid. Go eat a fruit.</p>
      <button v-on:click="enter" type="button" id="yes">Yes</button>
      <button v-on:click="block" type="button" id="no">No</button>


    </div>
  

    `,


    methods: {
        enter(){
           let divTest = document.getElementById('myModal');
            divTest.style.display = "none";
        },

        block(){
            let blockMessage = document.getElementById('tooYoung');
            let yes = document.getElementById('yes');
            let no = document.getElementById('no');
            let eighteen = document.getElementById('eighteen');

            blockMessage.style.display = "block";
            yes.style.display = "none";
            no.style.display = "none";
            eighteen.style.display = "none";
        }
        
    }
    


}