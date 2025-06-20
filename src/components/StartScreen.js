import { useState } from "react";

const StartScreen = ({onStart}) => {
    const [input,setInput] = useState('');
    const handleSubmit = (event)=>{
        event.preventDefault();
        if(input.trim()){
            onStart(input.trim());
        }else{
            alert("시작 단어를 입력하세요");
        }
    }
    return (
        <div className="start-screen">
            <h1>말의 끝, <br/><span>너의 시작</span></h1>
            <form className="input-form" onSubmit={handleSubmit}>
                <p>시작 단어를 입력하면 게임이 시작됩니다</p>
                <input 
                    value={input}
                    type="text"
                    onChange={(e)=>{setInput(e.target.value)}}

                    placeholder="시작 단어를 입력하세요"
                />
                <button type="submit">시작하기</button>
            </form>
        </div>
    );
};

export default StartScreen;