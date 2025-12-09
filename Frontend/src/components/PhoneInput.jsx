import React, { useState, useEffect, useRef } from "react";
import { dropdownManager } from "../utils/dropdownManager";
// import AuFlag from "../assets/au-flag.jpg";
// import InFlag from "../assets/india-flag.png";
// import UsFlag from "../assets/us-flag.png";
import AF from "../assets/svg/af.svg";
import AX from "../assets/svg/ax.svg";
import AL from "../assets/svg/al.svg";
import DZ from "../assets/svg/dz.svg";
import AS from "../assets/svg/as.svg";
import AD from "../assets/svg/ad.svg";
import AO from "../assets/svg/ao.svg";
import AI from "../assets/svg/ai.svg";
import AQ from "../assets/svg/aq.svg";
import AG from "../assets/svg/ag.svg";
import AR from "../assets/svg/ar.svg";
import AM from "../assets/svg/am.svg";
import AW from "../assets/svg/aw.svg";
import AU from "../assets/svg/au.svg";
import AT from "../assets/svg/at.svg";
import AZ from "../assets/svg/az.svg";
import BS from "../assets/svg/bs.svg";
import BH from "../assets/svg/bh.svg";
import BD from "../assets/svg/bd.svg";
import BB from "../assets/svg/bb.svg";
import BY from "../assets/svg/by.svg";
import BE from "../assets/svg/be.svg";
import BZ from "../assets/svg/bz.svg";
import BJ from "../assets/svg/bj.svg";
import BM from "../assets/svg/bm.svg";
import BT from "../assets/svg/bt.svg";
import BO from "../assets/svg/bo.svg";
import BQ from "../assets/svg/bq.svg";
import BA from "../assets/svg/ba.svg";
import BW from "../assets/svg/bw.svg";
import BV from "../assets/svg/bv.svg";
import BR from "../assets/svg/br.svg";
import IO from "../assets/svg/io.svg";
import BN from "../assets/svg/bn.svg";
import BG from "../assets/svg/bg.svg";
import BF from "../assets/svg/bf.svg";
import BI from "../assets/svg/bi.svg";
import CV from "../assets/svg/cv.svg";
import KH from "../assets/svg/kh.svg";
import CM from "../assets/svg/cm.svg";
import CA from "../assets/svg/ca.svg";
import KY from "../assets/svg/ky.svg";
import CF from "../assets/svg/cf.svg";
import TD from "../assets/svg/td.svg";
import CL from "../assets/svg/cl.svg";
import CN from "../assets/svg/cn.svg";
import CX from "../assets/svg/cx.svg";
import CC from "../assets/svg/cc.svg";
import CO from "../assets/svg/co.svg";
import KM from "../assets/svg/km.svg";
import CG from "../assets/svg/cg.svg";
import CD from "../assets/svg/cd.svg";
import CK from "../assets/svg/ck.svg";
import CR from "../assets/svg/cr.svg";
import CI from "../assets/svg/ci.svg";
import HR from "../assets/svg/hr.svg";
import CU from "../assets/svg/cu.svg";
import CW from "../assets/svg/cw.svg";
import CY from "../assets/svg/cy.svg";
import CZ from "../assets/svg/cz.svg";
import DK from "../assets/svg/dk.svg";
import DJ from "../assets/svg/dj.svg";
import DM from "../assets/svg/dm.svg";
import DO from "../assets/svg/do.svg";
import EC from "../assets/svg/ec.svg";
import EG from "../assets/svg/eg.svg";
import SV from "../assets/svg/sv.svg";
import GQ from "../assets/svg/gq.svg";
import ER from "../assets/svg/er.svg";
import EE from "../assets/svg/ee.svg";
import SZ from "../assets/svg/sz.svg";
import ET from "../assets/svg/et.svg";
import FK from "../assets/svg/fk.svg";
import FO from "../assets/svg/fo.svg";
import FJ from "../assets/svg/fj.svg";
import FI from "../assets/svg/fi.svg";
import FR from "../assets/svg/fr.svg";
import GF from "../assets/svg/gf.svg";
import PF from "../assets/svg/pf.svg";
import TF from "../assets/svg/tf.svg";
import GA from "../assets/svg/ga.svg";
import GM from "../assets/svg/gm.svg";
import GE from "../assets/svg/ge.svg";
import DE from "../assets/svg/de.svg";
import GH from "../assets/svg/gh.svg";
import GI from "../assets/svg/gi.svg";
import GR from "../assets/svg/gr.svg";
import GL from "../assets/svg/gl.svg";
import GD from "../assets/svg/gd.svg";
import GP from "../assets/svg/gp.svg";
import GU from "../assets/svg/gu.svg";
import GT from "../assets/svg/gt.svg";
import GG from "../assets/svg/gg.svg";
import GN from "../assets/svg/gn.svg";
import GW from "../assets/svg/gw.svg";
import GY from "../assets/svg/gy.svg";
import HT from "../assets/svg/ht.svg";
import HM from "../assets/svg/hm.svg";
import VA from "../assets/svg/va.svg";
import HN from "../assets/svg/hn.svg";
import HK from "../assets/svg/hk.svg";
import HU from "../assets/svg/hu.svg";
import IS from "../assets/svg/is.svg";
import IN from "../assets/svg/in.svg";
import ID from "../assets/svg/id.svg";
import IR from "../assets/svg/ir.svg";
import IQ from "../assets/svg/iq.svg";
import IE from "../assets/svg/ie.svg";
import IM from "../assets/svg/im.svg";
import IL from "../assets/svg/il.svg";
import IT from "../assets/svg/it.svg";
import JM from "../assets/svg/jm.svg";
import JP from "../assets/svg/jp.svg";
import JE from "../assets/svg/je.svg";
import JO from "../assets/svg/jo.svg";
import KZ from "../assets/svg/kz.svg";
import KE from "../assets/svg/ke.svg";
import KI from "../assets/svg/ki.svg";
import KW from "../assets/svg/kw.svg";
import KG from "../assets/svg/kg.svg";
import LA from "../assets/svg/la.svg";
import LV from "../assets/svg/lv.svg";
import LB from "../assets/svg/lb.svg";
import LS from "../assets/svg/ls.svg";
import LR from "../assets/svg/lr.svg";
import LY from "../assets/svg/ly.svg";
import LI from "../assets/svg/li.svg";
import LT from "../assets/svg/lt.svg";
import LU from "../assets/svg/lu.svg";
import MO from "../assets/svg/mo.svg";
import MG from "../assets/svg/mg.svg";
import MW from "../assets/svg/mw.svg";
import MY from "../assets/svg/my.svg";
import MV from "../assets/svg/mv.svg";
import ML from "../assets/svg/ml.svg";
import MT from "../assets/svg/mt.svg";
import MH from "../assets/svg/mh.svg";
import MQ from "../assets/svg/mq.svg";
import MR from "../assets/svg/mr.svg";
import MU from "../assets/svg/mu.svg";
import YT from "../assets/svg/yt.svg";
import MX from "../assets/svg/mx.svg";
import FM from "../assets/svg/fm.svg";
import MD from "../assets/svg/md.svg";
import MC from "../assets/svg/mc.svg";
import MN from "../assets/svg/mn.svg";
import ME from "../assets/svg/me.svg";
import MS from "../assets/svg/ms.svg";
import MA from "../assets/svg/ma.svg";
import MZ from "../assets/svg/mz.svg";
import MM from "../assets/svg/mm.svg";
import NA from "../assets/svg/na.svg";
import NR from "../assets/svg/nr.svg";
import NP from "../assets/svg/np.svg";
import NL from "../assets/svg/nl.svg";
import NC from "../assets/svg/nc.svg";
import NZ from "../assets/svg/nz.svg";
import NI from "../assets/svg/ni.svg";
import NE from "../assets/svg/ne.svg";
import NG from "../assets/svg/ng.svg";
import NU from "../assets/svg/nu.svg";
import NF from "../assets/svg/nf.svg";
import MK from "../assets/svg/mk.svg";
import MP from "../assets/svg/mp.svg";
import NO from "../assets/svg/no.svg";
import OM from "../assets/svg/om.svg";
import PK from "../assets/svg/pk.svg";
import PW from "../assets/svg/pw.svg";
import PS from "../assets/svg/ps.svg";
import PA from "../assets/svg/pa.svg";
import PG from "../assets/svg/pg.svg";
import PY from "../assets/svg/py.svg";
import PE from "../assets/svg/pe.svg";
import PH from "../assets/svg/ph.svg";
import PN from "../assets/svg/pn.svg";
import PL from "../assets/svg/pl.svg";
import PT from "../assets/svg/pt.svg";
import PR from "../assets/svg/pr.svg";
import QA from "../assets/svg/qa.svg";
import RE from "../assets/svg/re.svg";
import RO from "../assets/svg/ro.svg";
import RU from "../assets/svg/ru.svg";
import RW from "../assets/svg/rw.svg";
import BL from "../assets/svg/bl.svg";
import SH from "../assets/svg/sh.svg";
import KN from "../assets/svg/kn.svg";
import LC from "../assets/svg/lc.svg";
import MF from "../assets/svg/mf.svg";
import PM from "../assets/svg/pm.svg";
import VC from "../assets/svg/vc.svg";
import WS from "../assets/svg/ws.svg";
import SM from "../assets/svg/sm.svg";
import ST from "../assets/svg/st.svg";
import SA from "../assets/svg/sa.svg";
import SN from "../assets/svg/sn.svg";
import RS from "../assets/svg/rs.svg";
import SC from "../assets/svg/sc.svg";
import SL from "../assets/svg/sl.svg";
import SG from "../assets/svg/sg.svg";
import SX from "../assets/svg/sx.svg";
import SK from "../assets/svg/sk.svg";
import SI from "../assets/svg/si.svg";
import SB from "../assets/svg/sb.svg";
import SO from "../assets/svg/so.svg";
import ZA from "../assets/svg/za.svg";
import GS from "../assets/svg/gs.svg";
import SS from "../assets/svg/ss.svg";
import ES from "../assets/svg/es.svg";
import LK from "../assets/svg/lk.svg";
import SD from "../assets/svg/sd.svg";
import SR from "../assets/svg/sr.svg";
import SJ from "../assets/svg/sj.svg";
import SE from "../assets/svg/se.svg";
import CH from "../assets/svg/ch.svg";
import SY from "../assets/svg/sy.svg";
import TW from "../assets/svg/tw.svg";
import TJ from "../assets/svg/tj.svg";
import TZ from "../assets/svg/tz.svg";
import TH from "../assets/svg/th.svg";
import TL from "../assets/svg/tl.svg";
import TG from "../assets/svg/tg.svg";
import TK from "../assets/svg/tk.svg";
import TO from "../assets/svg/to.svg";
import TT from "../assets/svg/tt.svg";
import TN from "../assets/svg/tn.svg";
import TR from "../assets/svg/tr.svg";
import TM from "../assets/svg/tm.svg";
import TC from "../assets/svg/tc.svg";
import TV from "../assets/svg/tv.svg";
import UG from "../assets/svg/ug.svg";
import UA from "../assets/svg/ua.svg";
import AE from "../assets/svg/ae.svg";
import GB from "../assets/svg/gb.svg";
import US from "../assets/svg/us.svg";
import UM from "../assets/svg/um.svg";
import UY from "../assets/svg/uy.svg";
import UZ from "../assets/svg/uz.svg";
import VU from "../assets/svg/vu.svg";
import VE from "../assets/svg/ve.svg";
import VN from "../assets/svg/vn.svg";
import VG from "../assets/svg/vg.svg";
import VI from "../assets/svg/vi.svg";
import WF from "../assets/svg/wf.svg";
import EH from "../assets/svg/eh.svg";
import YE from "../assets/svg/ye.svg";
import ZM from "../assets/svg/zm.svg";
import ZW from "../assets/svg/zw.svg";

// Full country list or slice based on props
// const allCountries = [
//   {
//     name: "Australia",
//     code: "AU",
//     dialCode: "+61",
//     flag: AuFlag,
//   },
//   {
//     name: "India",
//     code: "IN",
//     dialCode: "+91",
//     flag: InFlag,
//   },
//   {
//     name: "United States",
//     code: "US",
//     dialCode: "+1",
//     flag: UsFlag,
//   },
// ];

const allCountries = [
  { name: "Afghanistan", code: "AF", dialCode: "+93", flag: AF },
  { name: "Åland Islands", code: "AX", dialCode: "+358", flag: AX },
  { name: "Albania", code: "AL", dialCode: "+355", flag: AL },
  { name: "Algeria", code: "DZ", dialCode: "+213", flag: DZ },
  { name: "American Samoa", code: "AS", dialCode: "+1 684", flag: AS },
  { name: "Andorra", code: "AD", dialCode: "+376", flag: AD },
  { name: "Angola", code: "AO", dialCode: "+244", flag: AO },
  { name: "Anguilla", code: "AI", dialCode: "+1 264", flag: AI },
  { name: "Antarctica", code: "AQ", dialCode: "+672", flag: AQ },
  { name: "Antigua and Barbuda", code: "AG", dialCode: "+1 268", flag: AG },
  { name: "Argentina", code: "AR", dialCode: "+54", flag: AR },
  { name: "Armenia", code: "AM", dialCode: "+374", flag: AM },
  { name: "Aruba", code: "AW", dialCode: "+297", flag: AW },
  { name: "Australia", code: "AU", dialCode: "+61", flag: AU },
  { name: "Austria", code: "AT", dialCode: "+43", flag: AT },
  { name: "Azerbaijan", code: "AZ", dialCode: "+994", flag: AZ },
  { name: "Bahamas", code: "BS", dialCode: "+1 242", flag: BS },
  { name: "Bahrain", code: "BH", dialCode: "+973", flag: BH },
  { name: "Bangladesh", code: "BD", dialCode: "+880", flag: BD },
  { name: "Barbados", code: "BB", dialCode: "+1 246", flag: BB },
  { name: "Belarus", code: "BY", dialCode: "+375", flag: BY },
  { name: "Belgium", code: "BE", dialCode: "+32", flag: BE },
  { name: "Belize", code: "BZ", dialCode: "+501", flag: BZ },
  { name: "Benin", code: "BJ", dialCode: "+229", flag: BJ },
  { name: "Bermuda", code: "BM", dialCode: "+1 441", flag: BM },
  { name: "Bhutan", code: "BT", dialCode: "+975", flag: BT },
  {
    name: "Bolivia (Plurinational State of)",
    code: "BO",
    dialCode: "+591",
    flag: BO,
  },
  {
    name: "Bonaire, Sint Eustatius and Saba",
    code: "BQ",
    dialCode: "+599",
    flag: BQ,
  },
  { name: "Bosnia and Herzegovina", code: "BA", dialCode: "+387", flag: BA },
  { name: "Botswana", code: "BW", dialCode: "+267", flag: BW },
  { name: "Bouvet Island", code: "BV", dialCode: "+47", flag: BV },
  { name: "Brazil", code: "BR", dialCode: "+55", flag: BR },
  {
    name: "British Indian Ocean Territory",
    code: "IO",
    dialCode: "+246",
    flag: IO,
  },
  { name: "Brunei Darussalam", code: "BN", dialCode: "+673", flag: BN },
  { name: "Bulgaria", code: "BG", dialCode: "+359", flag: BG },
  { name: "Burkina Faso", code: "BF", dialCode: "+226", flag: BF },
  { name: "Burundi", code: "BI", dialCode: "+257", flag: BI },
  { name: "Cabo Verde", code: "CV", dialCode: "+238", flag: CV },
  { name: "Cambodia", code: "KH", dialCode: "+855", flag: KH },
  { name: "Cameroon", code: "CM", dialCode: "+237", flag: CM },
  { name: "Canada", code: "CA", dialCode: "+1", flag: CA },
  { name: "Cayman Islands", code: "KY", dialCode: "+1 345", flag: KY },
  { name: "Central African Republic", code: "CF", dialCode: "+236", flag: CF },
  { name: "Chad", code: "TD", dialCode: "+235", flag: TD },
  { name: "Chile", code: "CL", dialCode: "+56", flag: CL },
  { name: "China", code: "CN", dialCode: "+86", flag: CN },
  { name: "Christmas Island", code: "CX", dialCode: "+61", flag: CX },
  { name: "Cocos (Keeling) Islands", code: "CC", dialCode: "+61", flag: CC },
  { name: "Colombia", code: "CO", dialCode: "+57", flag: CO },
  { name: "Comoros", code: "KM", dialCode: "+269", flag: KM },
  { name: "Congo", code: "CG", dialCode: "+242", flag: CG },
  {
    name: "Congo (Democratic Republic of the)",
    code: "CD",
    dialCode: "+243",
    flag: CD,
  },
  { name: "Cook Islands", code: "CK", dialCode: "+682", flag: CK },
  { name: "Costa Rica", code: "CR", dialCode: "+506", flag: CR },
  { name: "Côte d'Ivoire", code: "CI", dialCode: "+225", flag: CI },
  { name: "Croatia", code: "HR", dialCode: "+385", flag: HR },
  { name: "Cuba", code: "CU", dialCode: "+53", flag: CU },
  { name: "Curaçao", code: "CW", dialCode: "+599", flag: CW },
  { name: "Cyprus", code: "CY", dialCode: "+357", flag: CY },
  { name: "Czechia", code: "CZ", dialCode: "+420", flag: CZ },
  { name: "Denmark", code: "DK", dialCode: "+45", flag: DK },
  { name: "Djibouti", code: "DJ", dialCode: "+253", flag: DJ },
  { name: "Dominica", code: "DM", dialCode: "+1 767", flag: DM },
  { name: "Dominican Republic", code: "DO", dialCode: "+1 809", flag: DO },
  { name: "Ecuador", code: "EC", dialCode: "+593", flag: EC },
  { name: "Egypt", code: "EG", dialCode: "+20", flag: EG },
  { name: "El Salvador", code: "SV", dialCode: "+503", flag: SV },
  { name: "Equatorial Guinea", code: "GQ", dialCode: "+240", flag: GQ },
  { name: "Eritrea", code: "ER", dialCode: "+291", flag: ER },
  { name: "Estonia", code: "EE", dialCode: "+372", flag: EE },
  { name: "Eswatini", code: "SZ", dialCode: "+268", flag: SZ },
  { name: "Ethiopia", code: "ET", dialCode: "+251", flag: ET },
  {
    name: "Falkland Islands (Malvinas)",
    code: "FK",
    dialCode: "+500",
    flag: FK,
  },
  { name: "Faroe Islands", code: "FO", dialCode: "+298", flag: FO },
  { name: "Fiji", code: "FJ", dialCode: "+679", flag: FJ },
  { name: "Finland", code: "FI", dialCode: "+358", flag: FI },
  { name: "France", code: "FR", dialCode: "+33", flag: FR },
  { name: "French Guiana", code: "GF", dialCode: "+594", flag: GF },
  { name: "French Polynesia", code: "PF", dialCode: "+689", flag: PF },
  {
    name: "French Southern Territories",
    code: "TF",
    dialCode: "+262",
    flag: TF,
  },
  { name: "Gabon", code: "GA", dialCode: "+241", flag: GA },
  { name: "Gambia", code: "GM", dialCode: "+220", flag: GM },
  { name: "Georgia", code: "GE", dialCode: "+995", flag: GE },
  { name: "Germany", code: "DE", dialCode: "+49", flag: DE },
  { name: "Ghana", code: "GH", dialCode: "+233", flag: GH },
  { name: "Gibraltar", code: "GI", dialCode: "+350", flag: GI },
  { name: "Greece", code: "GR", dialCode: "+30", flag: GR },
  { name: "Greenland", code: "GL", dialCode: "+299", flag: GL },
  { name: "Grenada", code: "GD", dialCode: "+1 473", flag: GD },
  { name: "Guadeloupe", code: "GP", dialCode: "+590", flag: GP },
  { name: "Guam", code: "GU", dialCode: "+1 671", flag: GU },
  { name: "Guatemala", code: "GT", dialCode: "+502", flag: GT },
  { name: "Guernsey", code: "GG", dialCode: "+44", flag: GG },
  { name: "Guinea", code: "GN", dialCode: "+224", flag: GN },
  { name: "Guinea-Bissau", code: "GW", dialCode: "+245", flag: GW },
  { name: "Guyana", code: "GY", dialCode: "+592", flag: GY },
  { name: "Haiti", code: "HT", dialCode: "+509", flag: HT },
  {
    name: "Heard Island and McDonald Islands",
    code: "HM",
    dialCode: "+672",
    flag: HM,
  },
  { name: "Holy See", code: "VA", dialCode: "+379", flag: VA },
  { name: "Honduras", code: "HN", dialCode: "+504", flag: HN },
  { name: "Hong Kong", code: "HK", dialCode: "+852", flag: HK },
  { name: "Hungary", code: "HU", dialCode: "+36", flag: HU },
  { name: "Iceland", code: "IS", dialCode: "+354", flag: IS },
  { name: "India", code: "IN", dialCode: "+91", flag: IN },
  { name: "Indonesia", code: "ID", dialCode: "+62", flag: ID },
  { name: "Iran (Islamic Republic of)", code: "IR", dialCode: "+98", flag: IR },
  { name: "Iraq", code: "IQ", dialCode: "+964", flag: IQ },
  { name: "Ireland", code: "IE", dialCode: "+353", flag: IE },
  { name: "Isle of Man", code: "IM", dialCode: "+44", flag: IM },
  { name: "Israel", code: "IL", dialCode: "+972", flag: IL },
  { name: "Italy", code: "IT", dialCode: "+39", flag: IT },
  { name: "Jamaica", code: "JM", dialCode: "+1 876", flag: JM },
  { name: "Japan", code: "JP", dialCode: "+81", flag: JP },
  { name: "Jersey", code: "JE", dialCode: "+44", flag: JE },
  { name: "Jordan", code: "JO", dialCode: "+962", flag: JO },
  { name: "Kazakhstan", code: "KZ", dialCode: "+7", flag: KZ },
  { name: "Kenya", code: "KE", dialCode: "+254", flag: KE },
  { name: "Kiribati", code: "KI", dialCode: "+686", flag: KI },
  { name: "Kuwait", code: "KW", dialCode: "+965", flag: KW },
  { name: "Kyrgyzstan", code: "KG", dialCode: "+996", flag: KG },
  {
    name: "Lao People's Democratic Republic",
    code: "LA",
    dialCode: "+856",
    flag: LA,
  },
  { name: "Latvia", code: "LV", dialCode: "+371", flag: LV },
  { name: "Lebanon", code: "LB", dialCode: "+961", flag: LB },
  { name: "Lesotho", code: "LS", dialCode: "+266", flag: LS },
  { name: "Liberia", code: "LR", dialCode: "+231", flag: LR },
  { name: "Libya", code: "LY", dialCode: "+218", flag: LY },
  { name: "Liechtenstein", code: "LI", dialCode: "+423", flag: LI },
  { name: "Lithuania", code: "LT", dialCode: "+370", flag: LT },
  { name: "Luxembourg", code: "LU", dialCode: "+352", flag: LU },
  { name: "Macao", code: "MO", dialCode: "+853", flag: MO },
  { name: "Madagascar", code: "MG", dialCode: "+261", flag: MG },
  { name: "Malawi", code: "MW", dialCode: "+265", flag: MW },
  { name: "Malaysia", code: "MY", dialCode: "+60", flag: MY },
  { name: "Maldives", code: "MV", dialCode: "+960", flag: MV },
  { name: "Mali", code: "ML", dialCode: "+223", flag: ML },
  { name: "Malta", code: "MT", dialCode: "+356", flag: MT },
  { name: "Marshall Islands", code: "MH", dialCode: "+692", flag: MH },
  { name: "Martinique", code: "MQ", dialCode: "+596", flag: MQ },
  { name: "Mauritania", code: "MR", dialCode: "+222", flag: MR },
  { name: "Mauritius", code: "MU", dialCode: "+230", flag: MU },
  { name: "Mayotte", code: "YT", dialCode: "+262", flag: YT },
  { name: "Mexico", code: "MX", dialCode: "+52", flag: MX },
  {
    name: "Micronesia (Federated States of)",
    code: "FM",
    dialCode: "+691",
    flag: FM,
  },
  { name: "Moldova (Republic of)", code: "MD", dialCode: "+373", flag: MD },
  { name: "Monaco", code: "MC", dialCode: "+377", flag: MC },
  { name: "Mongolia", code: "MN", dialCode: "+976", flag: MN },
  { name: "Montenegro", code: "ME", dialCode: "+382", flag: ME },
  { name: "Montserrat", code: "MS", dialCode: "+1 664", flag: MS },
  { name: "Morocco", code: "MA", dialCode: "+212", flag: MA },
  { name: "Mozambique", code: "MZ", dialCode: "+258", flag: MZ },
  { name: "Myanmar", code: "MM", dialCode: "+95", flag: MM },
  { name: "Namibia", code: "NA", dialCode: "+264", flag: NA },
  { name: "Nauru", code: "NR", dialCode: "+674", flag: NR },
  { name: "Nepal", code: "NP", dialCode: "+977", flag: NP },
  { name: "Netherlands", code: "NL", dialCode: "+31", flag: NL },
  { name: "New Caledonia", code: "NC", dialCode: "+687", flag: NC },
  { name: "New Zealand", code: "NZ", dialCode: "+64", flag: NZ },
  { name: "Nicaragua", code: "NI", dialCode: "+505", flag: NI },
  { name: "Niger", code: "NE", dialCode: "+227", flag: NE },
  { name: "Nigeria", code: "NG", dialCode: "+234", flag: NG },
  { name: "Niue", code: "NU", dialCode: "+683", flag: NU },
  { name: "Norfolk Island", code: "NF", dialCode: "+672", flag: NF },
  { name: "North Macedonia", code: "MK", dialCode: "+389", flag: MK },
  {
    name: "Northern Mariana Islands",
    code: "MP",
    dialCode: "+1 670",
    flag: MP,
  },
  { name: "Norway", code: "NO", dialCode: "+47", flag: NO },
  { name: "Oman", code: "OM", dialCode: "+968", flag: OM },
  { name: "Pakistan", code: "PK", dialCode: "+92", flag: PK },
  { name: "Palau", code: "PW", dialCode: "+680", flag: PW },
  { name: "Palestine, State of", code: "PS", dialCode: "+970", flag: PS },
  { name: "Panama", code: "PA", dialCode: "+507", flag: PA },
  { name: "Papua New Guinea", code: "PG", dialCode: "+675", flag: PG },
  { name: "Paraguay", code: "PY", dialCode: "+595", flag: PY },
  { name: "Peru", code: "PE", dialCode: "+51", flag: PE },
  { name: "Philippines", code: "PH", dialCode: "+63", flag: PH },
  { name: "Pitcairn", code: "PN", dialCode: "+872", flag: PN },
  { name: "Poland", code: "PL", dialCode: "+48", flag: PL },
  { name: "Portugal", code: "PT", dialCode: "+351", flag: PT },
  { name: "Puerto Rico", code: "PR", dialCode: "+1 787", flag: PR },
  { name: "Qatar", code: "QA", dialCode: "+974", flag: QA },
  { name: "Réunion", code: "RE", dialCode: "+262", flag: RE },
  { name: "Romania", code: "RO", dialCode: "+40", flag: RO },
  { name: "Russian Federation", code: "RU", dialCode: "+7", flag: RU },
  { name: "Rwanda", code: "RW", dialCode: "+250", flag: RW },
  { name: "Saint Barthélemy", code: "BL", dialCode: "+590", flag: BL },
  {
    name: "Saint Helena, Ascension and Tristan da Cunha",
    code: "SH",
    dialCode: "+290",
    flag: SH,
  },
  { name: "Saint Kitts and Nevis", code: "KN", dialCode: "+1 869", flag: KN },
  { name: "Saint Lucia", code: "LC", dialCode: "+1 758", flag: LC },
  {
    name: "Saint Martin (French part)",
    code: "MF",
    dialCode: "+590",
    flag: MF,
  },
  { name: "Saint Pierre and Miquelon", code: "PM", dialCode: "+508", flag: PM },
  {
    name: "Saint Vincent and the Grenadines",
    code: "VC",
    dialCode: "+1 784",
    flag: VC,
  },
  { name: "Samoa", code: "WS", dialCode: "+685", flag: WS },
  { name: "San Marino", code: "SM", dialCode: "+378", flag: SM },
  { name: "Sao Tome and Principe", code: "ST", dialCode: "+239", flag: ST },
  { name: "Saudi Arabia", code: "SA", dialCode: "+966", flag: SA },
  { name: "Senegal", code: "SN", dialCode: "+221", flag: SN },
  { name: "Serbia", code: "RS", dialCode: "+381", flag: RS },
  { name: "Seychelles", code: "SC", dialCode: "+248", flag: SC },
  { name: "Sierra Leone", code: "SL", dialCode: "+232", flag: SL },
  { name: "Singapore", code: "SG", dialCode: "+65", flag: SG },
  {
    name: "Sint Maarten (Dutch part)",
    code: "SX",
    dialCode: "+1 721",
    flag: SX,
  },
  { name: "Slovakia", code: "SK", dialCode: "+421", flag: SK },
  { name: "Slovenia", code: "SI", dialCode: "+386", flag: SI },
  { name: "Solomon Islands", code: "SB", dialCode: "+677", flag: SB },
  { name: "Somalia", code: "SO", dialCode: "+252", flag: SO },
  { name: "South Africa", code: "ZA", dialCode: "+27", flag: ZA },
  {
    name: "South Georgia and the South Sandwich Islands",
    code: "GS",
    dialCode: "+500",
    flag: GS,
  },
  { name: "South Sudan", code: "SS", dialCode: "+211", flag: SS },
  { name: "Spain", code: "ES", dialCode: "+34", flag: ES },
  { name: "Sri Lanka", code: "LK", dialCode: "+94", flag: LK },
  { name: "Sudan", code: "SD", dialCode: "+249", flag: SD },
  { name: "Suriname", code: "SR", dialCode: "+597", flag: SR },
  { name: "Svalbard and Jan Mayen", code: "SJ", dialCode: "+47", flag: SJ },
  { name: "Sweden", code: "SE", dialCode: "+46", flag: SE },
  { name: "Switzerland", code: "CH", dialCode: "+41", flag: CH },
  { name: "Syrian Arab Republic", code: "SY", dialCode: "+963", flag: SY },
  { name: "Taiwan, Province of China", code: "TW", dialCode: "+886", flag: TW },
  { name: "Tajikistan", code: "TJ", dialCode: "+992", flag: TJ },
  {
    name: "Tanzania, United Republic of",
    code: "TZ",
    dialCode: "+255",
    flag: TZ,
  },
  { name: "Thailand", code: "TH", dialCode: "+66", flag: TH },
  { name: "Timor-Leste", code: "TL", dialCode: "+670", flag: TL },
  { name: "Togo", code: "TG", dialCode: "+228", flag: TG },
  { name: "Tokelau", code: "TK", dialCode: "+690", flag: TK },
  { name: "Tonga", code: "TO", dialCode: "+676", flag: TO },
  { name: "Trinidad and Tobago", code: "TT", dialCode: "+1 868", flag: TT },
  { name: "Tunisia", code: "TN", dialCode: "+216", flag: TN },
  { name: "Turkey", code: "TR", dialCode: "+90", flag: TR },
  { name: "Turkmenistan", code: "TM", dialCode: "+993", flag: TM },
  {
    name: "Turks and Caicos Islands",
    code: "TC",
    dialCode: "+1 649",
    flag: TC,
  },
  { name: "Tuvalu", code: "TV", dialCode: "+688", flag: TV },
  { name: "Uganda", code: "UG", dialCode: "+256", flag: UG },
  { name: "Ukraine", code: "UA", dialCode: "+380", flag: UA },
  { name: "United Arab Emirates", code: "AE", dialCode: "+971", flag: AE },
  {
    name: "United Kingdom of Great Britain and Northern Ireland",
    code: "GB",
    dialCode: "+44",
    flag: GB,
  },
  { name: "United States of America", code: "US", dialCode: "+1", flag: US },
  {
    name: "United States Minor Outlying Islands",
    code: "UM",
    dialCode: "+1",
    flag: UM,
  },
  { name: "Uruguay", code: "UY", dialCode: "+598", flag: UY },
  { name: "Uzbekistan", code: "UZ", dialCode: "+998", flag: UZ },
  { name: "Vanuatu", code: "VU", dialCode: "+678", flag: VU },
  {
    name: "Venezuela (Bolivarian Republic of)",
    code: "VE",
    dialCode: "+58",
    flag: VE,
  },
  { name: "Viet Nam", code: "VN", dialCode: "+84", flag: VN },
  {
    name: "Virgin Islands (British)",
    code: "VG",
    dialCode: "+1 284",
    flag: VG,
  },
  { name: "Virgin Islands (U.S.)", code: "VI", dialCode: "+1 340", flag: VI },
  { name: "Wallis and Futuna", code: "WF", dialCode: "+681", flag: WF },
  { name: "Western Sahara", code: "EH", dialCode: "+212", flag: EH },
  { name: "Yemen", code: "YE", dialCode: "+967", flag: YE },
  { name: "Zambia", code: "ZM", dialCode: "+260", flag: ZM },
  { name: "Zimbabwe", code: "ZW", dialCode: "+263", flag: ZW },
];

const PhoneInput = ({
  formData,
  setFormData,
  errors = {},
  name = "phone",
  preferredCountries = [
    "AU",
    "IN",
    "US",
    "AF",
    "AX",
    "AL",
    "DZ",
    "AS",
    "AD",
    "AO",
    "AI",
    "AQ",
    "AG",
    "AR",
    "AM",
    "AW",
    "AU",
    "AT",
    "AZ",
    "BS",
    "BH",
    "BD",
    "BB",
    "BY",
    "BE",
    "BZ",
    "BJ",
    "BM",
    "BT",
    "BO",
    "BQ",
    "BA",
    "BW",
    "BV",
    "BR",
    "IO",
    "BN",
    "BG",
    "BF",
    "BI",
    "CV",
    "KH",
    "CM",
    "CA",
    "KY",
    "CF",
    "TD",
    "CL",
    "CN",
    "CX",
    "CC",
    "CO",
    "KM",
    "CG",
    "CD",
    "CK",
    "CR",
    "CI",
    "HR",
    "CU",
    "CW",
    "CY",
    "CZ",
    "DK",
    "DJ",
    "DM",
    "DO",
    "EC",
    "EG",
    "SV",
    "GQ",
    "ER",
    "EE",
    "SZ",
    "ET",
    "FK",
    "FO",
    "FJ",
    "FI",
    "FR",
    "GF",
    "PF",
    "TF",
    "GA",
    "GM",
    "GE",
    "DE",
    "GH",
    "GI",
    "GR",
    "GL",
    "GD",
    "GP",
    "GU",
    "GT",
    "GG",
    "GN",
    "GW",
    "GY",
    "HT",
    "HM",
    "VA",
    "HN",
    "HK",
    "HU",
    "IS",
    "IN",
    "ID",
    "IR",
    "IQ",
    "IE",
    "IM",
    "IL",
    "IT",
    "JM",
    "JP",
    "JE",
    "JO",
    "KZ",
    "KE",
    "KI",
    "KW",
    "KG",
    "LA",
    "LV",
    "LB",
    "LS",
    "LR",
    "LY",
    "LI",
    "LT",
    "LU",
    "MO",
    "MG",
    "MW",
    "MY",
    "MV",
    "ML",
    "MT",
    "MH",
    "MQ",
    "MR",
    "MU",
    "YT",
    "MX",
    "FM",
    "MD",
    "MC",
    "MN",
    "ME",
    "MS",
    "MA",
    "MZ",
    "MM",
    "NA",
    "NR",
    "NP",
    "NL",
    "NC",
    "NZ",
    "NI",
    "NE",
    "NG",
    "NU",
    "NF",
    "MK",
    "MP",
    "NO",
    "OM",
    "PK",
    "PW",
    "PS",
    "PA",
    "PG",
    "PY",
    "PE",
    "PH",
    "PN",
    "PL",
    "PT",
    "PR",
    "QA",
    "RE",
    "RO",
    "RU",
    "RW",
    "BL",
    "SH",
    "KN",
    "LC",
    "MF",
    "PM",
    "VC",
    "WS",
    "SM",
    "ST",
    "SA",
    "SN",
    "RS",
    "SC",
    "SL",
    "SG",
    "SX",
    "SK",
    "SI",
    "SB",
    "SO",
    "ZA",
    "GS",
    "SS",
    "ES",
    "LK",
    "SD",
    "SR",
    "SJ",
    "SE",
    "CH",
    "SY",
    "TW",
    "TJ",
    "TZ",
    "TH",
    "TL",
    "TG",
    "TK",
    "TO",
    "TT",
    "TN",
    "TR",
    "TM",
    "TC",
    "TV",
    "UG",
    "UA",
    "AE",
    "GB",
    "US",
    "UM",
    "UY",
    "UZ",
    "VU",
    "VE",
    "VN",
    "VG",
    "VI",
    "WF",
    "EH",
    "YE",
    "ZM",
    "ZW",
  ],
  inputClassName = "",
  wrapperClassName = "",
  flagwrapper = "",
  onBlur,
}) => {
  const countryList = allCountries.filter((c) =>
    preferredCountries.includes(c.code)
  );
  const [selectedCountry, setSelectedCountry] = useState(countryList[0]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownId] = useState(() => `phone-${Math.random().toString(36)}`);
  const dropdownRef = useRef();

  useEffect(() => {
    const fullNumber = `${selectedCountry.dialCode}${phoneNumber}`;
    setFormData({ ...formData, [name]: fullNumber });
  }, [selectedCountry, phoneNumber]);

  useEffect(() => {
    dropdownManager.register(dropdownId, setDropdownOpen);
    return () => dropdownManager.unregister(dropdownId);
  }, [dropdownId]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        dropdownManager.closeDropdown(dropdownId);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownId]);

  const handleSelect = (country) => {
    setSelectedCountry(country);
    dropdownManager.closeDropdown(dropdownId);
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setPhoneNumber(value);
  };

  const handleBlur = (e) => {
    if (onBlur) {
      const fullNumber = `${selectedCountry.dialCode}${phoneNumber}`;
      onBlur({ target: { name, value: fullNumber } });
    }
  };

  return (
    <div
      className={`relative w-full flex bg-white border ${wrapperClassName} ${
        errors[name] ? "border-red-500" : "border-[#949AA5]"
      }`}
    >
      {/* Country flag selector */}
      <div
        className={`flex items-center md:px-[1.058em] md:py-[1.058em] sm:p-[2.8125em] xs:p-[3.75em] p-[5em] pe-[3.90625vw] cursor-pointer md:w-[6.349em] md:basis-[6.349em] basis-[22.9166666667vw] shrink-0 grow-0 justify-between border-r ${flagwrapper}`}
        onClick={() => {
          if (dropdownOpen) {
            dropdownManager.closeDropdown(dropdownId);
          } else {
            dropdownManager.openDropdown(dropdownId);
            setDropdownOpen(true);
          }
        }}
      >
        <img
          src={selectedCountry.flag}
          alt={selectedCountry.code}
          className="md:w-[2.116em] md:h-[1.323em] xs:w-[4.129074em] xs:h-[2.8em] w-[7.8125vw] h-[5.2083333333vw]"
        />
        <svg
          className="md:ml-[1.058em] ml-1 w-[12px] grow-0 shrink-0 basis-[12px] h-[16px]"
          width="450"
          height="258"
          viewBox="0 0 450 258"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M442.664 41.4469L249.496 246.695C246.352 250.038 242.556 252.701 238.343 254.522C234.131 256.343 229.59 257.282 225 257.282C220.411 257.282 215.87 256.343 211.657 254.522C207.444 252.701 203.649 250.038 200.504 246.695L7.33628 41.4469C-7.17572 26.0229 3.75229 0.710938 24.9363 0.710938H425.064C446.248 0.710938 457.176 26.0229 442.664 41.4469Z"
            fill="black"
          />
        </svg>
      </div>

      {/* Dial code */}
      {/* <span className="pl-3 py-[13px] placeholder:text-[#919191] sm:text-lg text-base">
        {selectedCountry.dialCode}
      </span> */}

      {/* Phone number input */}
      <input
        type="tel"
        inputMode="numeric"
        placeholder="412 345 678"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        onBlur={handleBlur}
        className={`flex-1 min-w-0 placeholder:text-[#919191] outline-none ${inputClassName}`}
      />

      {/* Dropdown */}
      {dropdownOpen && (
        <ul
          ref={dropdownRef}
          className="absolute z-10 top-[100%] w-full bg-white border border-gray-300 shadow-lg max-h-60 overflow-y-scroll"
        >
          {countryList.map((country) => (
            <li
              key={country.code}
              onClick={() => handleSelect(country)}
              className="flex items-center sm:gap-2 gap-[3.5vw] sm:px-[1.058em] sm:py-[0.794em] px-[1.0666666667em] xs:py-[0.529em] py-[4.2vw] bg-white hover:bg-[#F2F2F2] sm:text-[1.058em] xs:text-[2.5em] text-[4.16667vw] leading-normal cursor-pointer text-black"
            >
              <div className="flex items-center xs:gap-4 gap-[3.5vw]">
                <img
                  src={country.flag}
                  alt={country.name}
                  className="md:w-[2.116em] md:h-[1.323em] xs:w-[4.129074em] xs:h-[2.8em] w-[7.8125vw] h-[5.2083333333vw]"
                />
                <span className="">{country.name}</span>
              </div>
              <span className="text-gray-500">{country.dialCode}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PhoneInput;







// new phoneinput

// import React from "react";
// import PhoneInputLib from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import './PhoneInput.css';

// const PhoneInput = ({
//   formData,
//   setFormData,
//   errors = {},
//   name = "phone",
//   inputClassName = "",
//   wrapperClassName = "",
//   onBlur,
// }) => {
//   const handleChange = (value) => {
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleBlur = () => {
//     if (onBlur) {
//       onBlur({ target: { name, value: formData[name] } });
//     }
//   };

//   return (
//     <div
//       className={`relative w-full flex bg-white border ${
//         wrapperClassName
//       } ${errors[name] ? "border-red-500" : "border-[#949AA5]"}`}
//     >
//       <PhoneInputLib
//         className="demobutton"
//         country={"in"}
//         value={formData[name] || ""}
//         onChange={handleChange}
//         onBlur={handleBlur}
//         placeholder="Enter phone number"
//         inputClass={`flex-1 min-w-0 placeholder:text-[#919191] outline-none w-[93%] h-[65px] text-[20px] ml-[40px] xs:w-[90%] xs:h-[60px] xs:text-[18px] xs:ml-[20px] md:w-[95%] md:h-[70px] md:text-[22px] md:ml-[50px]"  ${inputClassName}`}
//         inputStyle={{width: '93%',  height: '65px',fontSize: '20px', marginLeft: '40px'}}
//         dropdownStyle={{fontSize: '20px',}}
//         buttonClass="my-flag-button"
//       />
//     </div>
//   );
// };

// export default PhoneInput;
