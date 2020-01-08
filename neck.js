function neck()
{
   
        this.x=mouseX;
        this.y=100;
        this.radius=100

        this.downhead=function()
        {
            if(keyCode===DOWN_ARROW){
                this.y=150
            }

            if(this.y===150&&keyCode===UP_ARROW)
            {
                this.y=100;
            }
            
        }
    
    this.display=function()
    {
        ellipse(mouseX,this.y,this.radius);
        
        arc(mouseX, 370, 100, 100, 0,180);
        fill(255,255,0);
        line(this.x,200,this.x,500);
    }
}