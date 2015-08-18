var $ = function (id) {
    return document.getElementById(id);
}



var calculate_click = function () {
    var item1 = parseFloat($("Item_1").value);
    var item2 = parseFloat($("Item_2").value);
    var subtotal;
    var saletax;
    var item1_tax = parseFloat($("Item_1_tax").value);
    var item2_tax = parseFloat($("Item_2_tax").value);

 
    
    
    if (isNaN(item1 ) || isNaN(item2)) {
        alert("Missing item(s) price.");
    }else if (item1 < 0 || item2 < 0){
    	 alert("Item price must be a number that is zero or more!");
    }
    else if (isNaN(item1_tax) || isNaN(item2_tax)) {
        alert("Please enter tax rate.");
        
    }else if ((item1_tax < 0 || item1_tax > 100) || (item2_tax < 0 || item2_tax > 100)){
    	 alert("Tax Rate must be a number between 0 and 100!");
    } else {
    	subtotal = item1 + item2;
        salesTax = item1 * (item1_tax  / 100) + item2 * (item2_tax  / 100);
        salesTax = parseFloat(salesTax.toFixed(2));
        var total = subtotal + salesTax;
        
        $("subtotal").value = subtotal;
        $("salesTax").value = salesTax;
        $("total").value = total.toFixed(2);
    }
}

//The function below calls function calculate_click by click button "calculate". In other words, it puts function calculate_click into button "Calculate"
window.onload = function () {
	 $("calculate").onclick = calculate_click;
	 $("subtotal").focus;
	}