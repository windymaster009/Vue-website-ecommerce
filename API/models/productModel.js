// import connection
import db from "../config/database.js";
 
// Get All Products
export const getProducts = (result) => {
    db.query("SELECT * FROM car_db", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
} 
export const getcustomer = (result) => {
    db.query("SELECT * FROM ordered", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
} 

export const getProductsorder = (result) => {
    db.query("SELECT * FROM ordercar", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
   
}
export const getProductsordertest = (result) => {
    db.query("SELECT * FROM ordered", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
   
}
export const insertProductorder = (data, result) => {
    db.query("INSERT INTO ordercar SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

export const insertProductordertest = (data, result) => {
    db.query("INSERT INTO ordered SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
//Get Toyota Products
export const getProductToyota = (result) => {
    db.query("SELECT * FROM car_db where Brand ='TOYOTA' ", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
//Get BMW Products
export const getProductBMW = (result) => {
    db.query("SELECT * FROM car_db where Brand ='BMW' ", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
//Get Mercedes Products
export const getProductAMG = (result) => {
    db.query("SELECT * FROM car_db where Brand ='Mercedes' ", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
//Get Ford Products
export const getProductFord = (result) => {
    db.query("SELECT * FROM car_db where Brand ='Ford' ", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
//Get McLaren Products
export const getProductMc = (result) => {
    db.query("SELECT * FROM car_db where Brand ='McLaren' ", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
//Get Lexus Products
export const getProductLexus = (result) => {
    db.query("SELECT * FROM car_db where Brand ='Lexus' ", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
//Get Mitsubishi Products
export const getProductMitsu = (result) => {
    db.query("SELECT * FROM car_db where Brand ='Mitsubishi' ", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
//Get Mitsubishi Products
export const getProductPorsche = (result) => {
    db.query("SELECT * FROM car_db where Brand ='Porsche' ", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
//Get Mazda Products
export const getProductMazda = (result) => {
    db.query("SELECT * FROM car_db where Brand ='Mazda' ", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
//Get Nissan Products
export const getProductNissan = (result) => {
    db.query("SELECT * FROM car_db where Brand ='Nissan' ", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
// Get Single Product
export const getProductById = (id, result) => {
    db.query("SELECT * FROM car_db WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
export const getProductByName = (Model, result) => {
    db.query(`SELECT * FROM car_db WHERE Model Like '${Model}%' `  , (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
// Insert Product to Database
export const insertProduct = (data, result) => {
    db.query("INSERT INTO car_db SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
export const insertProductinOrder = (data, result) => {
    db.query("INSERT INTO ordered (`Models`, `Prices`,`Quality`,`custumers`,`phones`,`locations`)  SELECT GROUP_CONCAT( Models SEPARATOR','), SUM(Prices),count( * ),custumer,phone,location FROM ordercar;", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null,results);
        }
    });   
}

 
// Update Product to Database
export const updateProductById = (data, id, result) => {
    db.query("UPDATE car_db SET Brand =?,Model = ?, Price = ?,ImageCar = ? , Description = ? , Detail = ? WHERE id = ?", [data.Brand, data.Model,data.Price,data.ImageCar,data.Description,data.Detail, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Delete Product to Database
export const deleteProductById = (id, result) => {
    db.query("DELETE FROM car_db WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
export const deleteOrderById = (No, result) => {
    db.query("DELETE FROM ordercar WHERE No = ?", [No], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
export const deleteAllOrderById = ( result) => {
    db.query("DELETE FROM ordercar ",  (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
export const getsum = (No,result) => {
    db.query("SELECT No ,SUM(Prices) as t,count( * ) as  total_record, GROUP_CONCAT( Models SEPARATOR',') as combo FROM ordercar WHERE No = ?",[No] ,(err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    }); 
}
export const getsumall = (result) => {
    db.query("SELECT No ,SUM(Prices) as t,count( * ) as  total_record, GROUP_CONCAT( Models SEPARATOR',') as combo FROM ordercar ", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    }); 
}
export const updateorder1 = (data,  result) => {
    db.query("UPDATE ordercar SET custumer = ? , phone = ? ,location =?", [data.custumer,data.phone,data.location], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null,results);
        }
    });   
}
export const count = (result) => {
    db.query("SELECT count( * ) as toltal , COUNT(DISTINCT Brand) as combo FROM car_db ", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    }); 
}