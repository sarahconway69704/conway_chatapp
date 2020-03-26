// the export statement means that everything inside the curly braces 
// will be made public when you import this file into another via the import statement


export default {
    props: ['msg'], 

    template: `
        <p ref="bubble" class="new-message" :class="{ 'my-message' : matchedID}">
                <span>{{ msg.message.name }} says: </span>
                {{ msg.message.content }}
            </p>
   
    `,

    data: function() {
        return { 
        message: "hello from the template",
        matchedID: this.$parent.socketID == this.msg.id
        };
    },


 
        mounted() {
            const { bubble } = this.$refs
            const timeline = new TimelineLite()
            
            timeline.to(bubble, 1, {
              scale: 1.06,
              ease: Back.easeOut.config(1.7),
            })  

    
}
}