var bus = new Vue();


var text = new Vue({
	el: "#text",
	data: {
		beTrue: true,
		beTrigger: false,
		ok: false,
		tag: "",
		content:""
	},
	methods: {
		show: function(event) {
			this.beTrigger = true;
			this.beTrue = false;
			this.ok = true;
		},

		cancel: function(event) {
			this.beTrue = true;
			this.beTrigger = false;
			this.ok = false;
		},

		send: function(event) {
			bus.$emit("sendtofront", this.content);
			this.content = "";
		}
	}
})

var content = new Vue({
	el: "#content",
	data: {
		contents: ""
	},

	mounted: function() {
		bus.$on("sendtofront", function(content){
			this.contents += content;
		}.bind(this))
	}
})

