import React from 'react'
import { connect } from 'react-redux'
import { addptv } from '../../../actions'

import { Label,Input, Select, Button } from 'components'

let Addptv = ({ dispatch }) => {
  let textInput

  return (
    <div>

    <form onSubmit={e => {
      e.preventDefault()

      var form = e.target;

      var content = form.elements['content'].value;

      dispatch(addptv(content))

    }}>


    <Select name='content' >
<option value ="15351">Sunbury</option>
<option value ="15353">Diggers Rest</option>
<option value ="17204">Wallan</option>
<option value ="19827">Stony Point</option>
<option value ="19828">Crib Point</option>
<option value ="19829">Morradoo</option>
<option value ="19830">Bittern</option>
<option value ="19831">Hastings</option>
<option value ="19832">Tyabb</option>
<option value ="19833">Somerville</option>
<option value ="19834">Baxter</option>
<option value ="19835">Glen Iris</option>
<option value ="19836">Leawarra</option>
<option value ="19837">Darling</option>
<option value ="19838">East Malvern</option>
<option value ="19839">Holmesglen</option>
<option value ="19840">Jordanville</option>
<option value ="19841">Flagstaff</option>
<option value ="19842">Melbourne Central</option>
<option value ="19843">Parliament</option>
<option value ="19844">Belgrave</option>
<option value ="19845">Tecoma</option>
<option value ="19846">Upwey</option>
<option value ="19847">Alamein</option>
<option value ="19848">Ashburton</option>
<option value ="19849">Burwood</option>
<option value ="19850">Hartwell</option>
<option value ="19851">Willison</option>
<option value ="19852">Riversdale</option>
<option value ="19853">Camberwell</option>
<option value ="19854">Flinders Street</option>
<option value ="19855">Frankston</option>
<option value ="19856">Kananook</option>
<option value ="19857">Seaford</option>
<option value ="19858">Carrum</option>
<option value ="19859">Bonbeach</option>
<option value ="19860">Chelsea</option>
<option value ="19861">Edithvale</option>
<option value ="19862">Aspendale</option>
<option value ="19863">Mordialloc</option>
<option value ="19864">Parkdale</option>
<option value ="19865">Mentone</option>
<option value ="19866">Cheltenham</option>
<option value ="19867">Upper Ferntree Gully</option>
<option value ="19868">Ferntree Gully</option>
<option value ="19869">Boronia</option>
<option value ="19870">Bayswater</option>
<option value ="19871">Heathmont</option>
<option value ="19872">Highett</option>
<option value ="19873">Glen Waverley</option>
<option value ="19874">Syndal</option>
<option value ="19875">Mount Waverley</option>
<option value ="19876">Lilydale</option>
<option value ="19877">Mooroolbark</option>
<option value ="19878">Croydon</option>
<option value ="19879">Ringwood East</option>
<option value ="19880">Pakenham</option>
<option value ="19881">Officer</option>
<option value ="19882">Beaconsfield</option>
<option value ="19883">Berwick</option>
<option value ="19884">Narre Warren</option>
<option value ="19885">Hallam</option>
<option value ="19886">Cranbourne</option>
<option value ="19887">Merinda Park</option>
<option value ="19888">Dandenong</option>
<option value ="19889">Yarraman</option>
<option value ="19890">Noble Park</option>
<option value ="19891">Sandown Park</option>
<option value ="19892">East Camberwell</option>
<option value ="19893">Canterbury</option>
<option value ="19894">Chatham</option>
<option value ="19895">Surrey Hills</option>
<option value ="19896">Mont Albert</option>
<option value ="19897">Laburnum</option>
<option value ="19898">Blackburn</option>
<option value ="19899">Nunawading</option>
<option value ="19900">Mitcham</option>
<option value ="19901">Heatherdale</option>
<option value ="19902">Ringwood</option>
<option value ="19903">Auburn</option>
<option value ="19904">Glenferrie</option>
<option value ="19905">Hawthorn</option>
<option value ="19906">Burnley</option>
<option value ="19907">East Richmond</option>
<option value ="19908">Richmond</option>
<option value ="19909">Heyington</option>
<option value ="19910">Kooyong</option>
<option value ="19911">Tooronga</option>
<option value ="19912">Gardiner</option>
<option value ="19913">Springvale</option>
<option value ="19914">Westall</option>
<option value ="19915">Clayton</option>
<option value ="19916">Huntingdale</option>
<option value ="19917">Oakleigh</option>
<option value ="19918">Hughesdale</option>
<option value ="19919">Murrumbeena (Temporarily Closed)</option>
<option value ="19920">Carnegie (Temporarily Closed)</option>
<option value ="19921">Werribee</option>
<option value ="19922">Hoppers Crossing</option>
<option value ="19923">Laverton</option>
<option value ="19924">Aircraft</option>
<option value ="19925">Westona</option>
<option value ="19926">Altona</option>
<option value ="19927">Seaholme</option>
<option value ="19928">Westgarth</option>
<option value ="19929">Dennis</option>
<option value ="19930">Fairfield</option>
<option value ="19931">Alphington</option>
<option value ="19932">Darebin</option>
<option value ="19933">Ivanhoe</option>
<option value ="19934">Eaglemont</option>
<option value ="19935">Heidelberg</option>
<option value ="19936">Rosanna</option>
<option value ="19937">Moorabbin</option>
<option value ="19938">Patterson</option>
<option value ="19939">Bentleigh</option>
<option value ="19940">McKinnon</option>
<option value ="19941">Ormond</option>
<option value ="19942">Glenhuntly</option>
<option value ="19943">Caulfield</option>
<option value ="19944">Malvern</option>
<option value ="19945">Armadale</option>
<option value ="19946">Toorak</option>
<option value ="19947">Hawksburn</option>
<option value ="19948">Sandringham</option>
<option value ="19949">Hampton</option>
<option value ="19950">Brighton Beach</option>
<option value ="19951">Middle Brighton</option>
<option value ="19952">North Brighton</option>
<option value ="19953">Gardenvale</option>
<option value ="19954">Elsternwick</option>
<option value ="19955">Ripponlea</option>
<option value ="19956">Balaclava</option>
<option value ="19957">Windsor</option>
<option value ="19958">Prahran</option>
<option value ="19959">South Yarra</option>
<option value ="19960">Upfield</option>
<option value ="19961">Gowrie</option>
<option value ="19962">Fawkner</option>
<option value ="19963">Merlynston</option>
<option value ="19964">Batman</option>
<option value ="19965">Coburg</option>
<option value ="19966">Moreland</option>
<option value ="19967">Anstey</option>
<option value ="19968">Brunswick</option>
<option value ="19969">Jewell</option>
<option value ="19970">Royal Park</option>
<option value ="19971">Flemington Bridge</option>
<option value ="19972">Macaulay</option>
<option value ="19973">North Melbourne</option>
<option value ="19974">Clifton Hill</option>
<option value ="19975">Victoria Park</option>
<option value ="19976">Collingwood</option>
<option value ="19977">North Richmond</option>
<option value ="19978">West Richmond</option>
<option value ="19979">Jolimont-MCG</option>
<option value ="19980">Melton</option>
<option value ="19981">Rockbank</option>
<option value ="19982">Deer Park</option>
<option value ="19983">Macleod</option>
<option value ="19984">Watsonia</option>
<option value ="19985">Greensborough</option>
<option value ="19986">Montmorency</option>
<option value ="19987">Eltham</option>
<option value ="19988">Diamond Creek</option>
<option value ="19989">Wattle Glen</option>
<option value ="19990">Hurstbridge</option>
<option value ="19991">Williamstown</option>
<option value ="19992">Williamstown Beach</option>
<option value ="19993">North Williamstown</option>
<option value ="19994">Newport</option>
<option value ="19995">Spotswood</option>
<option value ="19996">Yarraville</option>
<option value ="19997">Seddon</option>
<option value ="19998">Sunbury</option>
<option value ="19999">Diggers Rest</option>
<option value ="20000">Watergardens</option>
<option value ="20001">Keilor Plains</option>
<option value ="20002">St Albans</option>
<option value ="20003">Ginifer</option>
<option value ="20004">Albion</option>
<option value ="20005">Epping</option>
<option value ="20006">Lalor</option>
<option value ="20007">Thomastown</option>
<option value ="20008">Keon Park</option>
<option value ="20009">Ruthven</option>
<option value ="20010">Reservoir</option>
<option value ="20011">Regent</option>
<option value ="20012">Preston</option>
<option value ="20013">Bell</option>
<option value ="20014">Thornbury</option>
<option value ="20015">Croxton</option>
<option value ="20016">Northcote</option>
<option value ="20017">Merri</option>
<option value ="20019">Rushall</option>
<option value ="20020">Ardeer</option>
<option value ="20021">Sunshine</option>
<option value ="20022">Tottenham</option>
<option value ="20023">West Footscray</option>
<option value ="20024">Middle Footscray</option>
<option value ="20025">Footscray</option>
<option value ="20026">South Kensington</option>
<option value ="20029">Craigieburn</option>
<option value ="20030">Broadmeadows</option>
<option value ="20031">Jacana</option>
<option value ="20032">Glenroy</option>
<option value ="20033">Oak Park</option>
<option value ="20034">Pascoe Vale</option>
<option value ="20035">Strathmore</option>
<option value ="20036">Glenbervie</option>
<option value ="20037">Essendon</option>
<option value ="20038">Moonee Ponds</option>
<option value ="20039">Ascot Vale</option>
<option value ="20040">Newmarket</option>
<option value ="20041">Kensington</option>
<option value ="20042">Box Hill</option>
<option value ="20043">Southern Cross</option>
<option value ="20287">Albury</option>
<option value ="20288">Ararat</option>
<option value ="20289">Avenel</option>
<option value ="20290">Bacchus Marsh</option>
<option value ="20291">Bairnsdale</option>
<option value ="20292">Ballan</option>
<option value ="20293">Ballarat</option>
<option value ="20294">Beaufort</option>
<option value ="20295">Benalla</option>
<option value ="20296">Bendigo</option>
<option value ="20297">Birregurra</option>
<option value ="20298">Broadford</option>
<option value ="20299">Bunyip</option>
<option value ="20300">Camperdown</option>
<option value ="20301">Castlemaine</option>
<option value ="20302">Chiltern</option>
<option value ="20303">Clarkefield</option>
<option value ="20304">Colac</option>
<option value ="20305">Corio</option>
<option value ="20306">Dingee</option>
<option value ="20307">Donnybrook</option>
<option value ="20308">Drouin</option>
<option value ="20309">Eaglehawk</option>
<option value ="20310">Echuca</option>
<option value ="20311">Elmore</option>
<option value ="20312">Euroa</option>
<option value ="20313">Garfield</option>
<option value ="20314">Geelong</option>
<option value ="20315">Gisborne</option>
<option value ="20316">Heathcote Junction</option>
<option value ="20317">Kangaroo Flat</option>
<option value ="20318">Kerang</option>
<option value ="20319">Kilmore East</option>
<option value ="20320">Kyneton</option>
<option value ="20321">Lara</option>
<option value ="20323">Little River</option>
<option value ="20324">Longwarry</option>
<option value ="20325">Macedon</option>
<option value ="20326">Malmsbury</option>
<option value ="20327">Marshall</option>
<option value ="20328">Moe</option>
<option value ="20329">Mooroopna</option>
<option value ="20330">Morwell</option>
<option value ="20331">Murchison East</option>
<option value ="20332">Nagambie</option>
<option value ="20333">Nar Nar Goon</option>
<option value ="20334">North Geelong</option>
<option value ="20335">North Shore</option>
<option value ="20336">Pyramid</option>
<option value ="20337">Riddells Creek</option>
<option value ="20338">Rochester</option>
<option value ="20339">Rosedale</option>
<option value ="20341">Sale</option>
<option value ="20342">Seymour</option>
<option value ="20343">Shepparton</option>
<option value ="20344">South Geelong</option>
<option value ="20345">Springhurst</option>
<option value ="20346">Stratford</option>
<option value ="20347">Swan Hill</option>
<option value ="20348">Tallarook</option>
<option value ="20349">Terang</option>
<option value ="20350">Trafalgar</option>
<option value ="20351">Traralgon</option>
<option value ="20352">Tynong</option>
<option value ="20353">Violet Town</option>
<option value ="20355">Wandong</option>
<option value ="20356">Wangaratta</option>
<option value ="20357">Warragul</option>
<option value ="20358">Warrnambool</option>
<option value ="20359">Winchelsea</option>
<option value ="20360">Wodonga</option>
<option value ="20361">Woodend</option>
<option value ="20362">Yarragon</option>
<option value ="22180">Southern Cross</option>
<option value ="22238">Flinders Street</option>
<option value ="22239">North Melbourne</option>
<option value ="22240">Footscray</option>
<option value ="22241">Sunshine</option>
<option value ="22242">Ginifer</option>
<option value ="22243">St Albans</option>
<option value ="22244">Watergardens</option>
<option value ="22247">Richmond</option>
<option value ="22248">Caulfield</option>
<option value ="22249">Clayton</option>
<option value ="22250">Dandenong</option>
<option value ="22251">Berwick</option>
<option value ="22252">Pakenham</option>
<option value ="22253">Essendon</option>
<option value ="22254">Broadmeadows</option>
<option value ="22257">Sherwood Park</option>
<option value ="40220">Roxburgh Park</option>
<option value ="40221">Craigieburn</option>
<option value ="43469">Wendouree</option>
<option value ="44817">Coolaroo</option>
<option value ="44951">Creswick</option>
<option value ="44952">Clunes</option>
<option value ="44953">Maryborough</option>
<option value ="45793">Lynbrook</option>
<option value ="45794">Cardinia Road</option>
<option value ="45795">South Morang</option>
<option value ="46468">Williams Landing</option>
<option value ="47482">Talbot</option>
<option value ="47641">Waurn Ponds</option>
<option value ="47642">Epsom</option>
<option value ="47647">Wyndham Vale</option>
<option value ="47648">Tarneit</option>
<option value ="20027">Flemington Racecourse</option>
<option value ="20028">Showgrounds</option>

    </Select>



    <Button type="submit">
      Go
    </Button>

    </form>


    </div>
  )

}

Addptv = connect()(Addptv)

export default Addptv
