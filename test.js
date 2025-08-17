main(min,current_val,ratings,categories){

	const fprice = products.filter();// for price range
	if(fprice){
			if(ratings.length > 0){
                ratings(fprice,categories);
            }else if(categories.length > 0){
                category(fprice)
            }else{
                display(fprice);
            }
	}else{
        if(ratings.length > 0){
            ratings(false,categories);
        }else if(categories.length > 0){
            category(false)
        }else{
            
        }
	}
}

ratings(fprice,categories){
	if(fprice){
		const fratings = fprice.filter(); // for ratings
		
		if(fratings){
			category(fratings);
		}else{
			category(false);
		}
		
	}else{
		const fratings = products.filter(); // for ratings
		if(fratings){
            
			category(fratings);
		}else{
			category(false);
		}
	}
}


category(fratings){
	if(fratings){
		const fcategory = fratings.filter();// for category
	}else{
		const fcategory = products.filter();
	}
}