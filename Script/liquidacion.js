 fetch("./Data/posts.json", { mode: "no-cors" })
 	.then(res => res.json())
 		.then((data)=>{
 		console.log(data);
 	});

 		// fetch("./Data/posts.json", { mode: "no-cors" }) 
 		// .then((res) => res.json())
 		// .then((data) => console.log(data));







