import typeDetail from '../asset/typeDetail.png'
import SelectButton from '../components/SelectButton'
import nextbtn from '../asset/nextbtn.svg'
import progressbar from '../asset/prgressbar/progressbar.svg'
import firstprogress from '../asset/prgressbar/firstprogress.svg'
import styled from 'styled-components'


function MatchTypePage() {
    return (
        <div>
            <div>
                <h1>작가님은</h1>
                <h1>어떤 전시를 열고 싶으신가요?</h1>
            </div>
            <div>
                <h3>전시 입장 가격</h3>
                <div>
                    <SelectButton label="무료 전시"></SelectButton>
                    <SelectButton label="유료 전시"></SelectButton>
                </div>
            </div>
            <div>
                <div>
                    <h3>전시 규모</h3>
                    <img src={typeDetail} />
                </div>
                <div>
                    <SelectButton label="소형 전시"></SelectButton>
                    <SelectButton label="중형 전시"></SelectButton>
                    <SelectButton label="대형 전시"></SelectButton>
                </div>
            </div>
            <div>
                <div>
                    <img src={progressbar} />
                    <img src={firstprogress} />
                </div>
                <div>
                    <button>다음으로</button>
                    <img src={nextbtn} />
                </div>
            </div>
        </div>
    )
}

export default MatchTypePage;