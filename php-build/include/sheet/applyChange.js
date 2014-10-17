/**
 * Apply calculated and formatted value to elements that represent cell
 * @return void
 */
sheet.fx.applyChange = function(){
    //console.log('sheet[#'+this.elementId+'] : applying all computed value to the element');
    var a;
    for(a in this.cells){
        this.cells[a].processDependency(false, false);
    }

    for(a in this.cells){
        this.cells[a].renderComputedValue();
    }
};