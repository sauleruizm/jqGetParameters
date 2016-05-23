QUnit.test("getParam -> Get empty Param", function(assert) {
    /**
     * description
     *
     */
   //window.location.assign("var=EGZWNCUKCNADOLDJXYFDXFXRAPNQFHZH&Tipo=D");
   var result = $.fn.getParams();
   assert.equal(result,"","Empty Param in URL","El url no es el esperado");
   
});
