const NEWSLETTER = {

    register: function() {
        let obj = {
            name: document.getElementById('newsletter-name').value,
            email: document.getElementById('newsletter-email').value
        }
        console.log(obj);
    },

    attachButton: function() {
        document.getElementById('newsletter-btn').addEventListener('click',function() {
            NEWSLETTER.register();
        });
    }

}

NEWSLETTER.attachButton();