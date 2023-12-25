import { useEffect,useState } from "react";
import { BsMicrosoftTeams } from 'react-icons/bs';

import './createteam.css'

function CreateTeam () {
    const [teamUsername,setTeamUsername] = useState('');
    const [teamName,setTeamName] = useState('');
    const [traidingTypes,setTraidingTypes] = useState([]);
    const [timeFrames,setTimeFrames] = useState([]);
    const [educationalContent,setEducationalContent] = useState('');
    const [educationalContentLanguage,setEducationalContentLanguage] = useState('');
    const [avatar, setAvatar] = useState();


    //Backend
    const[teams,setTeams] = useState([]);

    const fetchTeamsData = async () => {
        const resault = await fetch('http://localhost:8080/teams');
        const jsonResault = await resault.json();

        setTeams(jsonResault);
    }
    
    useEffect(()=>{
        fetchTeamsData();
    },[]);


    // error States
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const errors = {
        timeFrames_e: "Time frames field must not be empty",
        traidingTypes_e: "Traiding types field must not be empty",
        tname_c: "Team name length should be more than 5",
        tname_e: "Team name field must not be empty",
        tuname_c: "Team username length should be more than 5",
        tuname_e: "Team username field must not be empty",
        tuname_ex: "This team username is already used",
    };

    const errors_type = {
        timeFrames: "timeFrames",
        traidingTypes: "traidingTypes",
        tuname: "uname",
        tname: "tname",
    };

    const handleTraidingTypesChange = (event) => {
        const { value, checked } = event.target;
        const tTypes = traidingTypes;

        if (checked) {
            setTraidingTypes([...tTypes,value]);
        }
        else {
            setTraidingTypes(tTypes.filter((event) => event !== value));
        }
    };
    //

    const handleTimeFramesChange = (event) => {
        const { value, checked } = event.target;
        const tframes = timeFrames;

        if (checked) {
            setTimeFrames([...tframes,value]);
        }
        else {
            setTimeFrames(tframes.filter((event) => event !== value));
        }
    };

    
    function handleAvatarChange(event) {
        setAvatar(URL.createObjectURL(event.target.files[0]));
    }

    const isValidTeamUsername = (teamUsername) => {
        if(teamUsername === "") {
            setErrorMessages({name: errors_type.tuname,message:errors.tuname_e});
            return false;
        }

        if(teamUsername.length < 5) {
            setErrorMessages({name: errors_type.tuname,message:errors.tuname_c});
            return false;
        }

        if(teams.find((team) => team.teamUsername === teamUsername)) {
            setErrorMessages({name: errors_type.tuname, message: errors.tuname_ex});
            return false;
        }
        else {
            return true;
        }
    }

    const isValidTeamName = (teamName) => {
        if(teamName === "") {
            setErrorMessages({name: errors_type.tname,message:errors.tname_e});
            return false;
        }

        if(teamName.length < 5) {
            setErrorMessages({name: errors_type.tname,message:errors.tname_c});
            return false;
        }
        else {
            return true;
        }
    }

    const isValidTraidingTypes = (traidingTypes) => {
        if(traidingTypes === undefined || traidingTypes.length === 0) {
            setErrorMessages({name: errors_type.traidingTypes,message:errors.traidingTypes_e});
            return false;
        }
        else {
            return true;
        }
    }

    const isValidTimeFrames = (timeFrames) => {
        if(timeFrames === undefined || timeFrames.length === 0) {
            setErrorMessages({name: errors_type.timeFrames,message:errors.timeFrames_e});
            return false;
        }
        else {
            return true;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if(isValidTimeFrames(timeFrames) & isValidTraidingTypes(traidingTypes) &  isValidTeamName(teamName) & isValidTeamUsername(teamUsername)) {
            setErrorMessages({});
        }
        else {
            setIsSubmitted(true);
            //change this
        }
    };

    const renderErrorMessage = (name) =>
    name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
    );

    return (
        <>
            <div className="createTeam createTeam-container">
                <form className="form" onSubmit={handleSubmit}>
                    <div className="top">
                        {/* <h2 className='logo_name'>Traiding Team</h2> */}
                        {/* <div className="img"><BsMicrosoftTeams/></div> */}
                        <span className='pageName'>Create Team</span>
                    </div>

                    <div className="inputs">
                        <div className='form-div'>
                            <label ><b>Team Username</b></label>
                            <div className='inp'>
                                <div className="icon"><BsMicrosoftTeams/></div>
                                <input type={"text"} placeholder="Enter Team Username" name="teamUsername" onChange={(event)=>{setTeamUsername(event.target.value)}}/>
                            </div>
                            {renderErrorMessage(errors_type.tuname)}
                        </div>
                        

                        <div className='form-div'>
                            <label ><b>Team Name</b></label>
                            <div className='inp'>
                                <div className="icon"><BsMicrosoftTeams/></div>
                                <input type={"text"} placeholder="Enter Team Name" name="teamName" onChange={(event)=>{setTeamName(event.target.value)}}/>
                            </div>
                            {renderErrorMessage(errors_type.tname)}
                        </div>
                        
                        


                        <div className='form-div'>
                            <label><b>Traiding Types</b></label>
                            <input type="checkbox" className="btn-check" id="Scalp_btn" name="TraidingTypes" value="Scalp" autocomplete="off" onChange={(event)=>{handleTraidingTypesChange(event)}}/>
                            <label class="btn btn-outline-primary check_btn" for="Scalp_btn">Scalp</label>

                            <input type="checkbox" className="btn-check" id="MidTime_btn" name="TraidingTypes" value="Mid Time" autocomplete="off" onChange={(event)=>{handleTraidingTypesChange(event)}}/>
                            <label class="btn btn-outline-primary check_btn" for="MidTime_btn">Mid Time</label>

                            <input type="checkbox" className="btn-check" id="LongTime_btn" name="TraidingTypes" value="Long Time" autocomplete="off" onChange={(event)=>{handleTraidingTypesChange(event)}}/>
                            <label class="btn btn-outline-primary check_btn" for="LongTime_btn">Long Time</label>

                            {renderErrorMessage(errors_type.traidingTypes)}
                        </div>
                        


                        <div className='form-div'>
                            <label><b>Time Frames</b></label>
                            <input type="checkbox" className="btn-check" id="1m_btn" name="TimeFrames" value="1m" autocomplete="off" onChange={(event)=>{handleTimeFramesChange(event)}}/>
                            <label class="btn btn-outline-primary check_btn" for="1m_btn">1m</label>

                            <input type="checkbox" className="btn-check" id="5m_btn" name="TimeFrames" value="5m" autocomplete="off" onChange={(event)=>{handleTimeFramesChange(event)}}/>
                            <label class="btn btn-outline-primary check_btn" for="5m_btn">5m</label>

                            <input type="checkbox" className="btn-check" id="15m_btn" name="TimeFrames" value="15m" autocomplete="off" onChange={(event)=>{handleTimeFramesChange(event)}}/>
                            <label class="btn btn-outline-primary check_btn" for="15m_btn">15m</label>

                            <input type="checkbox" className="btn-check" id="1h_btn" name="TimeFrames" value="1h" autocomplete="off" onChange={(event)=>{handleTimeFramesChange(event)}}/>
                            <label class="btn btn-outline-primary check_btn" for="1h_btn">1h</label>

                            <input type="checkbox" className="btn-check" id="2h_btn" name="TimeFrames" value="2h" autocomplete="off" onChange={(event)=>{handleTimeFramesChange(event)}}/>
                            <label class="btn btn-outline-primary check_btn" for="2h_btn">2h</label>

                            <input type="checkbox" className="btn-check" id="4h_btn" name="TimeFrames" value="4h" autocomplete="off" onChange={(event)=>{handleTimeFramesChange(event)}}/>
                            <label class="btn btn-outline-primary check_btn" for="4h_btn">4h</label>

                            <input type="checkbox" className="btn-check" id="1d_btn" name="TimeFrames" value="1d" autocomplete="off" onChange={(event)=>{handleTimeFramesChange(event)}}/>
                            <label class="btn btn-outline-primary check_btn" for="1d_btn">1d</label>
                        
                            {renderErrorMessage(errors_type.timeFrames)}
                        </div>
                        


                        <div className='form-div'>
                            <label><b>Educational Content:</b>
                                <select className="selectList" name="selectedFruit" defaultValue="No" onChange={(event)=>{setEducationalContent(event.target.value)}}>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </label>
                        </div>


                        <div className='form-div'>
                            <label><b>Educational Content Language:</b>
                                <select className="selectList" id="languages" name="languages" defaultValue="en" onChange={(event)=>{setEducationalContentLanguage(event.target.value)}}>
                                    <option value="af">Afrikaans</option>
                                    <option value="sq" >Albanian - shqip</option>
                                    <option value="am">Amharic - አማርኛ</option>
                                    <option value="ar">Arabic - العربية</option>
                                    <option value="an">Aragonese - aragonés</option>
                                    <option value="hy">Armenian - հայերեն</option>
                                    <option value="ast">Asturian - asturianu</option>
                                    <option value="az">Azerbaijani - azərbaycan dili</option>
                                    <option value="eu">Basque - euskara</option>
                                    <option value="be">Belarusian - беларуская</option>
                                    <option value="bn">Bengali - বাংলা</option>
                                    <option value="bs">Bosnian - bosanski</option>
                                    <option value="br">Breton - brezhoneg</option>
                                    <option value="bg">Bulgarian - български</option>
                                    <option value="ca">Catalan - català</option>
                                    <option value="ckb">Central Kurdish</option>
                                    <option value="zh">Chinese - 中文</option>
                                    <option value="co">Corsican</option>
                                    <option value="hr">Croatian - hrvatski</option>
                                    <option value="cs">Czech - čeština</option>
                                    <option value="da">Danish - dansk</option>
                                    <option value="nl">Dutch - Nederlands</option>
                                    <option value="en">English</option>
                                    <option value="eo">Esperanto - esperanto</option>
                                    <option value="et">Estonian - eesti</option>
                                    <option value="fo">Faroese - føroyskt</option>
                                    <option value="fil">Filipino</option>
                                    <option value="fi">Finnish - suomi</option>
                                    <option value="fr">French - français</option>
                                    <option value="gl">Galician - galego</option>
                                    <option value="ka">Georgian - ქართული</option>
                                    <option value="de">German - Deutsch</option>
                                    <option value="el">Greek - Ελληνικά</option>
                                    <option value="gn">Guarani</option>
                                    <option value="gu">Gujarati - ગુજરાતી</option>
                                    <option value="ha">Hausa</option>
                                    <option value="haw">Hawaiian - ʻŌlelo Hawaiʻi</option>
                                    <option value="he">Hebrew - עברית</option>
                                    <option value="hi">Hindi - हिन्दी</option>
                                    <option value="hu">Hungarian - magyar</option>
                                    <option value="is">Icelandic - íslenska</option>
                                    <option value="id">Indonesian - Indonesia</option>
                                    <option value="ia">Interlingua</option>
                                    <option value="ga">Irish - Gaeilge</option>
                                    <option value="it">Italian - italiano</option>
                                    <option value="ja">Japanese - 日本語</option>
                                    <option value="kn">Kannada - ಕನ್ನಡ</option>
                                    <option value="kk">Kazakh - қазақ тілі</option>
                                    <option value="km">Khmer - ខ្មែរ</option>
                                    <option value="ko">Korean - 한국어</option>
                                    <option value="ku">Kurdish - Kurdî</option>
                                    <option value="ky">Kyrgyz - кыргызча</option>
                                    <option value="lo">Lao - ລາວ</option>
                                    <option value="la">Latin</option>
                                    <option value="lv">Latvian - latviešu</option>
                                    <option value="ln">Lingala - lingála</option>
                                    <option value="lt">Lithuanian - lietuvių</option>
                                    <option value="mk">Macedonian - македонски</option>
                                    <option value="ms">Malay - Bahasa Melayu</option>
                                    <option value="ml">Malayalam - മലയാളം</option>
                                    <option value="mt">Maltese - Malti</option>
                                    <option value="mr">Marathi - मराठी</option>
                                    <option value="mn">Mongolian - монгол</option>
                                    <option value="ne">Nepali - नेपाली</option>
                                    <option value="no">Norwegian - norsk</option>
                                    <option value="nb">Norwegian Bokmål - norsk bokmål</option>
                                    <option value="nn">Norwegian Nynorsk - nynorsk</option>
                                    <option value="oc">Occitan</option>
                                    <option value="or">Oriya - ଓଡ଼ିଆ</option>
                                    <option value="om">Oromo - Oromoo</option>
                                    <option value="ps">Pashto - پښتو</option>
                                    <option value="fa">Persian - فارسی</option>
                                    <option value="pl">Polish - polski</option>
                                    <option value="pt">Portuguese - português</option>
                                    <option value="pa">Punjabi - ਪੰਜਾਬੀ</option>
                                    <option value="qu">Quechua</option>
                                    <option value="ro">Romanian - română</option>
                                    <option value="mo">Romanian (Moldova) - română (Moldova)</option>
                                    <option value="rm">Romansh - rumantsch</option>
                                    <option value="ru">Russian - русский</option>
                                    <option value="gd">Scottish Gaelic</option>
                                    <option value="sr">Serbian - српски</option>
                                    <option value="sh">Serbo-Croatian - Srpskohrvatski</option>
                                    <option value="sn">Shona - chiShona</option>
                                    <option value="sd">Sindhi</option>
                                    <option value="si">Sinhala - සිංහල</option>
                                    <option value="sk">Slovak - slovenčina</option>
                                    <option value="sl">Slovenian - slovenščina</option>
                                    <option value="so">Somali - Soomaali</option>
                                    <option value="st">Southern Sotho</option>
                                    <option value="es">Spanish - español</option>
                                    <option value="su">Sundanese</option>
                                    <option value="sw">Swahili - Kiswahili</option>
                                    <option value="sv">Swedish - svenska</option>
                                    <option value="tg">Tajik - тоҷикӣ</option>
                                    <option value="ta">Tamil - தமிழ்</option>
                                    <option value="tt">Tatar</option>
                                    <option value="te">Telugu - తెలుగు</option>
                                    <option value="th">Thai - ไทย</option>
                                    <option value="ti">Tigrinya - ትግርኛ</option>
                                    <option value="to">Tongan - lea fakatonga</option>
                                    <option value="tr">Turkish - Türkçe</option>
                                    <option value="tk">Turkmen</option>
                                    <option value="tw">Twi</option>
                                    <option value="uk">Ukrainian - українська</option>
                                    <option value="ur">Urdu - اردو</option>
                                    <option value="ug">Uyghur</option>
                                    <option value="uz">Uzbek - o‘zbek</option>
                                    <option value="vi">Vietnamese - Tiếng Việt</option>
                                    <option value="wa">Walloon - wa</option>
                                    <option value="cy">Welsh - Cymraeg</option>
                                    <option value="fy">Western Frisian</option>
                                    <option value="xh">Xhosa</option>
                                    <option value="yi">Yiddish</option>
                                    <option value="yo">Yoruba - Èdè Yorùbá</option>
                                    <option value="zu">Zulu - isiZulu</option>
                                </select>
                            </label>
                        </div>


                        <div className="avatar-form-div">
                            <label><b>Team Avatar:</b>
                                <input type="file" onChange={handleAvatarChange} />
                                <img src={avatar}/>
                            </label>
                        </div>



                    </div>

                    <button className='submit' type="submit">Submit</button>
                </form>
            </div>   
        </>
    );
}
 
export default CreateTeam;