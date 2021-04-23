new Vue({
    el: '#app',
    data: {
        montrerCacher: 'password',
        hide: true,
        show: false
    },
    methods: {
        showMDP: function() {
            this.montrerCacher = 'text'
            this.hide = false;
            this.show = true;
        },
        hideMDP: function() {
            this.montrerCacher = 'password'
            this.show = false;
            this.hide = true;
        }
    }
    
});