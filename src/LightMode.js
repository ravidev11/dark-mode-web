import React from 'react'
import Title from 'styled-components'
export const LightMode = () => {
  return (
    <div >
      <div className="">
      <h3 className="heading">Dark Mode Challenge  </h3>
        <div className="row">
            <i class="fas fa-football-ball    "></i>
           <div className="col-md-6">
            <p className="" style={{text:"#6f6f6f"}}>Lollipo Powder Powder. Cotton Cndy Caramels chupa chups halvah muffin caramels
                     apple pie topping cake. Topping Chacolate bar pastry chacolate cake.
                      Cupcake tart jujubes dragee jelly-o icing sugar plum . Chacolate bar lollipop candy canes.
                       Biscuit croissant apple pie pugging caramels wafer tart tootsie roll macaroon.
                        Croissant tiramisu chacolate bar carrot cake lemon drops halvah. 
                </p>
                
            </div>
            <div className="col-md-6">
            <p>
                Marshmallow tiramisu liquorice bear claw tart. Muffin chupa chups pie.
                 Brownie apple pie topping lemon drops marzipan toffe. 
                 Pudding macaroon icing ice ceam banbon cake tart. 
                 Pudding sugar plum chacolate cake biscuit pastry pastrychacolate bar tart.
                 Lemon drops dessert gummies icing. 
            </p>
                
            </div>
            
              
              
        </div>
        
           
                <input type="Name" className=" form form-control m-1 "  placeholder="Name"/>

                <input type="email" className="form form-control  m-1 "  placeholder=" Email"/>
            


            
            
            <div className="m-5" >
            <button type="submit" className="btn btn-info float-right mr-0">Submit</button>
            <button type="submit" className="btn btn-primary float-right  mr-2  ">Save</button>
            </div>
</div>
      
    </div>
  )
}
export default LightMode