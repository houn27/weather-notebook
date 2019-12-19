
<script>

export default {
    props:{
        list:{
            type:Array,
            
        }
    },
    render:function(createElement){
        var _this=this;
        var list=[];
        //create every comment as a div, add it in a list
        //console.log(this.list);
        this.list.forEach(function(msg, index){
            var node=createElement('div',{
                attrs:{class: 'list-item'}
            },[ // the name area
                //createElement('span',msg.name+": "),
                createElement('div',{
                    attrs:{class: 'list-msg'}
                },[
                    // the message area and the reply button
                    createElement('p',msg.message),
                    createElement('button',{
                        attrs:{class:'list-reply'},
                        on:{click:function(){
                            _this.handleReply(index);
                        }}
                    },'Comments'),
                ])
            ]
            )
            list.push(node);
        });
        // if list is not empty, render() return the list, else, return "message list is empty!"
        if(this.list.length){
            return createElement('div',{attrs:{class:'list'}},list);
        }else{
            return createElement('div',{attrs:{class:'list-empty'}},'message list is empty! ');
        }
    },
    methods:{
        handleReply:function(index){
            this.$emit('reply',index);
        }
    }
}
</script>