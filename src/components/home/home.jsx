import './home.css'
import { useState } from 'react'

function Home(){
    const [bao1,setBao1] = useState("")
    const [bao2,setBao2] = useState("")
  
    const SuKien1 = (e)=>{
        if(e.target.value == ''){
            setBao1("This field is invalid");
            document.getElementsByClassName("inp1")[0].style.border = "1px solid red";
        }else {setBao1("");
        document.getElementsByClassName("inp1")[0].style.border = "1px solid black";
    }
    }
    const SuKien2 = (e)=>{
        if(e.target.value == ''){
            setBao2("This field is invalid");
            document.getElementsByClassName("inp2")[0].style.border = "1px solid red";
        }else {setBao2("");
        document.getElementsByClassName("inp1")[0].style.border = "1px solid black";
    }
    }
    

    return (
        <section id="home">
            <div className="home">
                <a href="https://huynham.github.io/dorsin-0911-home/" className="home-a"><i class="fas fa-home-lg"></i></a>
                <h3>DORSIN</h3>
                <p className="p1">Sign in to continue to Dorsin.</p>
                <form>
                    <label>Username</label><span className="thongbao">{bao1}</span><br />
                    <input type="text" placeholder="Enter YourName" className="inp1" onChange={SuKien1} onBlur={SuKien1}/><br />
                    <label>Password</label><span className="thongbao">{bao2}</span><br />
                    <input type="text" placeholder="Enter Password" className="inp2" onChange={SuKien2} onBlur={SuKien2}/><br />
                    <input type="checkbox" className="check" />
                    <label>Remember Me</label><br />
                    <button type="button" className="but1">Log In</button>
                    <p className="p2"><a href="https://huynham.github.io/dorsin-0911-home/"><i class="fas fa-lock-alt"></i>Forgot your password?</a></p>
                </form>

            </div>
        </section>
    )
}

export default Home