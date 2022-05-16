// test('sum 2 + 2', () => {
//     expect(2 + 2).toBe(4)

import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

//Espiao - Ver se as funções estão sendo chamadas e nao garantir que elas funcionem
const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
    { create : async() => {}},
    { sendMail : async () => {}}
)
// });
describe('Submit feedback', ()=>{
    it('should be able to submit a feedback', async () => {        
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment : 'example comment',
            screenshot: 'data:image/png;base64,9274627482hwshy37ry3rh',            
        })).resolves.not.toThrow();        

        expect(createFeedbackSpy).toHaveBeenCalled(); // Espero que a função tenha sido chamada
        expect(sendMailSpy).toHaveBeenCalled(); // Espero que a função tenha sido chamada
    });

    it('should note be able to submit feedback without type', async () => {        
        await expect(submitFeedback.execute({
            type: '',
            comment : 'example comment',
            screenshot: 'data:image/png;base64,99872724787',            
        })).rejects.toThrow();        
    });

    it('should note be able to submit feedback without comment', async () => {        
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment : '',
            screenshot: 'data:image/png;base64,998989ffdf',            
        })).rejects.toThrow();        
    });

    it('should note be able to submit feedback with an invalid screenshot', async () => {        
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment : 'example comment',
            screenshot: 'teste.jpg',            
        })).rejects.toThrow();        
    });
})