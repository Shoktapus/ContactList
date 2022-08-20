const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
		},
		actions: {
			
		createContact: ()=> {
			fetch("https://assets.breatheco.de/apis/fake/contact", {
				method: "POST", 
				headers: {"content-type":"application/json"},
				body: JSON.stringify()
			})
		}	
		}
	};
};

export default getState;
