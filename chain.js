class chain {

constructor(bodyA, pointB) {

var op={

    stiffness: 0.6,
    length:20,
    bodyA:bodyA,
    pointB:pointB

}

         this.rubber = Constraint.create(op)

    this.bodyA = bodyA
    this.pointB = pointB    

      World.add(world, this.rubber);     


}

fly(){
    this.rubber.bodyA = null;
}

display() {

    line(this.rubber.bodyA.position.x,this.rubber.bodyA.position.y, this.rubber.pointB.x, this.rubber.pointB.y);
     
}
       
            

}