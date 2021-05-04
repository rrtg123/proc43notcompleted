class Question{
    constructor(){
this.title=createElement('h1')
this.input1=createInput("Enter your name")
this.input2=createInput("Enter correct option")
this.button=createButton("Submit")
this.question=createElement('h3')

this.option1=createElement('h4')
this.option2=createElement('h4')
this.option3=createElement('h4')
this.option4=createElement('h4')
    }
    hide(){
        this.title.hide()
        this.input1.hide()
        this.input2.hide()
        this.button.hide()

    }
    display(){
        this.title.html("A quiz for the genius!")
        this.title.positon(350,10)
        this.question.html("What has teeth but cannot bite?")
        this.question.position(150,80)

        this.option1.html("human")
        this.option1.position(150,100)

        this.option2.html("Comb")
        this.option2.position(350,100)

        this.option3.html("Pen")
        this.option3.position(150,120)

        this.option4.html("I don't know")
        this.option4.position(350,120)

    
        this.input1.position(170,150)
        this.input2.position(330,150)

        this.button.position(250,170)
        this.button.mousePressed(()=>{
            hide();
            contestant.name=this.input1.value()
            contestant.answer=this.input2.value()
        contestantCount++
        contestant.index=contestantCount
        contestant.updateCount(contestantCount)
        contestant.update();
        })

    }
}