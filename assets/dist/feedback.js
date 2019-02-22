new Vue({
    el: '#feedback',
    data: {
        bgImage: './assets/images/tourist_say.png',
        title: 'What Our Tourist Say'
    },
    components: {
        item: {
            props: ['image', 'name', 'feedback'],
            template: `<div class="feedback__item">
                          <img :src="image">
                          <div class="feedback__text">
                              <h4>{{name}}</h4>
                              <p>{{feedback}}</p>
                          </div>
                          </div>`
        }
    }
});
