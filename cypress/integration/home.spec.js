
describe("home page",()=>{
    it("app deve estar online",()=>{ //"it" caso de teste no cypress
        cy.viewport(1440,900)
        cy.visit("https://buger-eats.vercel.app")
        cy.xpath("//div[@id="page-home"]//h1").should("have.text","Seja um parceiro deliver pela Buger Eats")     //"should usado para validar
        cy.get("#page-home main h1").should("have.text","Seja um parceiro deliver pela Buger Eats")     //"should usado para validar
    }) 
})