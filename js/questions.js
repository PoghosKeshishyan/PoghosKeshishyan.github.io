class Question {
    constructor(text, answers) {
        this.text = text;
        this.answers = answers;
    }
}

let questions = [
    //1 - 5
    [
        new Question("Քանի՞ գիրք կա Նոր Կտակարանում", ["27", "17", "13", "35"]),
        new Question("Քանի՞ օր Հովնան մարգարեն մնաց կետի փորում", ["3", "40", "12", "4"]),
        new Question("Ի՞նչ մասնագիտություն ունեին Պետրոսն ու Անդրեասը", ["Ձկնորսներ", "Հովիվներ", "Որսորդներ", "Մեղվապահներ"]),
        new Question("Ո՞ր առաքյալն է գրել բոլոր առաքյալներից շատ նամակներ", ["Պողոս", "Պետրոս", "Հովհաննես", "Հուդա"]),
        new Question("Ո՞վ է Առակներ գրքի հեղինակը", ["Սողոմոն", "Սամվել", "Դավիդ", "Սավուղ"]),
        new Question("Ո՞ր քաղաքում առաջինը առաքյալները քրիստոնյա անվանվեցին", ["Անտիոքում", "Եփեսոս", "Կեսարիա", "Երուսաղեմ"]),
        new Question("Ի՞նչ է նշանակում Պետրոս", ["Վեմ", "Հովիվ", "Հավատարիմ", "Բարի"]),
        new Question("Դավթի քաղաքը", ["Երուսաղեմ", "Դամասկոս", "Արադ", "Մեմփիս"]),
        new Question("Ո՞ր գիրքը չկա Աստվածաշնչում", ["Եզեկիա", "Եսայիա", "Երեմիա", "Դանիել"]),
        new Question("Հակոբի (սիրելի) կնոջ անունը", ["Ռաքել", "Լիա", "Ռեբեկա", "Ռամա"]),
        new Question("Արարչագործության ո՞ր օրը Աստված ստեղծեց ծառերը", ["3-րդ", "2-րդ", "4-րդ", "6-րդ"]),
        new Question("Քանի՞ աշակերտ ուներ Հիսուսը", ["12", "11", "70", "3"]),
        new Question("Քանի՞ գիրք կա Հին Կտակարանում", ["39", "13", "27", "36"]),
        new Question("Ո՞ր դարաշրջանում է գրվել Աստվածաշնչի վերջին գիրքը", ["1-ին դար", "20-րդ դար", "Քարի դար", "5-րդ դար"]),
        new Question("Ո՞վ է Աստվածաշնչի հեղինակը", ["Սուրբ Հոգին", "Մովսեսը", "Հովհաննես", "Աբրահամ"]),
        new Question("Քանի՞ օր Նոյը իր ընտանիքի հետ մնաց տապանում", ["1 տարի", "150 օր", "40 օր", "190 օր"]),
        new Question("Իսրայելի առաջին թագավորը", ["Սավուղ", "Դավիդ", "Սամվել", "Սողոմոն"]),
        new Question("Ի՞նչ անուն ստացավ Դանիելը Բաբելոնում", ["Բաղդասասար", "Միսակ", "Սեդրակ", "Աբեդնագով"]),
        new Question("Ո՞վ է գրել Աստվածաշնչի առաջին հինգ գրքերը", ["Մովսես", "Աբրահամ", "Իսահակ", "Հեսու"]),
        new Question("Քանի՞ արծաթով Հուդան մատնեց Հիսուսին", ["30", "40", "12", "25"]),
        new Question("Գետ Իսրայելում", ["Հորդանան", "Տիգրիս", "Եփրատ", "Ամուդարիա"]),
        new Question("Ո՞վ պատրաստեց ճանապարհ Հիսուս Քրիստոսի համար", ["Հովհաննես", "Զաքարիա", "Հովսեփ", "Ադամ"]), // Հովհաննես Մկրտիչ՝ responsive-ի համար Մկրտիչ բառը հանել եմ
        new Question("Փղշտացիների Աստվածը", ["Դագոն", "Օսիրիս", "Բել", "Ռա"]),
        new Question("Սամվել Մարգարեի հայրը", ["Եղկանա", "Բոոս", "Աբիմելեք", "Սիսարիա"]),
        new Question("Ողբ", ["Երմիայի", "Եսայիաի", "Դավիթի", "Սավուղի"]),
        new Question("Հիսուս Քրիստոսը ո՞ւմ աղվես կոչեց", ["Հերովդեսին", "Պիղատոսին", "Բարաբբա", "Հերովդիա"]),

        // Այս հարցը հանվել է, որովհետև հարմար չէ responsive-ի համար
        // new Question("Ո՞վ է գրել այս նամակը. «Ես գրեցի եկեղեցուն, բայց Դիոտրեփէսը, որ ուզում է նրանց մեջ առաջինը լինել, մեզ չի ընդունում»", ["Հովհաննես առաքյալ", "Պետրոս առաքյալ", "Տիտոս", "Հակոբոս առաքյալ"]),
    ],

    //6 - 10 
    [
        new Question("Ո՞ւմ կյանքը ավելացավ 15 տարով", ["Եզեկիա", "Հովսափատ", "Հերոբովամ", "Աքազ"]), //Ես 38.5
        new Question("Մաալոնն և Քելլոնն ո՞ւմ որդիներն էին", ["Նոյեմիի", "Հովսիաի", "Սամվելի", "Հռութի"]),
        new Question("Ո՞ր սաղմոսի մեջ է Տիրոջ համար ասվում՝ Վեմ, Ամրություն, Փրկիչ և Բարձր Աշտարակ", ["Սաղմոս 18", "Սաղմոս 26", "Սաղմոս 45", "Սաղմոս 119"]),  // responsive-ի համար հարցից հանել եմ՝ Աստված, Պարսիպ, Փրկության Եղջյուր բառերը
        new Question("Ֆելիքսի փոխարեն ո՞վ կուսակալ եղավ", ["Փեստոս", "Ագրիպպաս", "Կղոդեոս", "Կրեսկես"]),
        new Question("Ո՞վ քարայրի մեջ 100 մարգարե պահեց և կերակրեց", ["Աբդիա", "Նավում", "Աբիու", "Օղդա"]),
        new Question("Ո՞րտեղ է գրված. «Սերը մահվան պես զորավոր է»", ["Երգ Երգոց 8.6", "Երգ Երգոց 6.8", "Երգ Երգոց 4.6", "Երգ Երգոց 5.4"]),
        new Question("Ո՞վ սպանեց Հովրամին", ["Հեու", "Հեզաբել", "Ոքոզիա", "Աքաաբ"]), //Դ Թագ 9
        new Question("Պողոս առաքյալի հիմնած եկեղեցին է", ["Պափոս", "Սարդիկե", "Լավոդիկիա", "Տրովադա"]),
        new Question("Աստվածաշնչի ո՞ր գրքի մեջ Աստված բառը նշված չէ", ["Եսթեր", "Երգ Երգոց", "Նեեմիա", "Ովսե"]),
        new Question("Ո՞րտեղ է գրված. «Ուրախ սիրտը դեղի պես օգտակար է»", ["Առակաց 17.22", "Առակաց 23.17", "Ժողովող 5.4", "Երեմիա 14.3"]),
        new Question("Խոստմունքով պատվիրանը գրված է", ["Եփեսացիներ 6.2", "Եբրայեցիս 3.5", "Գաղատացիս 6.2", "Փիլիմոն 2"]),
        new Question("Ո՞վ էր տաճարից հողոս ջրերի տեսլիքը տեսնող մարգարեն", ["Եզեկիել", "Միքիա", "Ովսեա", "Սոփոնիա"]),
        new Question("Ո՞վ էր չորացաց ոսկորներով դաշտի տեսլիքը տեսնող մարգարեն", ["Եզեկիել", "Մաղաքիա", "Զաքարիա", "Անգե"]),
        new Question("Ի՞նչն է պետք ամեն զգուշությունով պահել", ["Սիրտը", "Սերը", "Ոսկին", "Արդարի խրատը"]),
        new Question("Ի՞նչն է իրեն անձնատուր եղողին սպանում", ["Ագահություն", "Հպարտություն", "Կեղծավորություն", "Գոռոզություն"]), //Առակ 1.19  -- responsive-ի համաչ "Արթածասիրություն" բառը փոխել եմ "Կեղծավորություն", իսկ "Ամբարտավանություն" բառը փոխել եմ "Գոռոզություն" բառի հետ
        new Question("Ո՞րտեղ է գրված օրհնության և անեծքի մասին", ["Բ Օրին. 28 գլուխ", "Թվոց 6-րդ գլուխ", "Ելից 40-րդ գլուխ", "Բ Օրին. 26 գլուխ"]),
        new Question("Հին Կտակարանի ո՞ր գիրքը ունի մեկ գլուխ", ["Աբդիու", "Անգեա", "Միքիա", "Նեեմիա"]),
        new Question("Ո՞վ է գրել Առակաց գրքի 30-րդ գլուխը", ["Ագուր", "Սողոմոն", "Ադոնիա", "Աբիաթար"]),
        new Question("Ո՞վ է հնարել առաջին երաժշտական գործիքը", ["Հոբաղ", "Հագար", "Հայել", "Սելլա"]), //Ծննդ 4.21

        // Այս հարցերը հանվել է, որովհետև հարմար չէ responsive-ի համար
        // new Question("Սողոմոնը ո՞ւմ հետ դաշինք կնքեց տաճարի շինության համար", ["Քրիամի", "Սաբբայի թագուհու", "Աբիուի", "Ազարիաի"]), //Գ թագ 5
        // new Question("Ո՞վքեր էին Զորաբաբելի աջակիցները", ["Անգե և Զաքարիա", "Մաղաքիա և Ովսեա", "Նավում և Սոփոնյա", "Հովել և Ամովս"]), //Եզր 1-5
        // new Question("Լրացրու. «Լավ է հայտնի հանդիմանությունը, քան թե...»", ["Ծածուկ սերը", "Հիմարի բարկությունը", "Անկեղծ բարեկամը", "Քաղցր խոսքը"]),
        // new Question("Աղմկալի տոնախմբություն, նվիրված այն ժամանակաշրջանին, երբ Եսթեր թագուհին իր ժողովրդին փրկեց կոտորածից", ["Փուրիմ", "Պասեք", "Նավակատիք", "Հանուկա"]), // responsive-ի համար "Բարի խորհուրդներ"-ը փոխել եմ "Ոսկին" բառով
        // new Question("Ի՞նչն է քաղցր պատառի նման մինչև փորի շտեմարանները իջնում", ["Քսու մարդու խոսքերը", "Ամբարտավան մարդու խոսքերը", "Յիմար մարդու խոսքերը", "Ստախոս մարդու խոսքերը"]), //Առ 26.22 18.8
        // Question("Ի՞նչի նման է այն մարդը, որ միջամտում է ուրիշի վեճին", ["Շունը ականջից բռնողին", "Մեծամիտ մարդու", "Իր փսխածին ետ դարձող շան", "Ինքն իր աչքին ուժեղ երևացողին"]),  //Առ 26.17
    ],

    //11 - 15
    [
        new Question("Ո՞վ էր այն մարգարեն, որ Աստծուն թալանելու համար հանդիմանում էր ժողովրդին", ["Մաղաքիա", "Հովնան", "Միքիա", "Զաքարիա"]), //Մաղաք 3.10
        new Question("Շնորհքի մասին գրված է.", ["Եփեսացիս 2", "Ա Կորնթացիս 5", "Գաղատացիս 6", "Ա Տիմոթեոս 2"]),
        new Question("Ո՞ր եկեղեցուն է ասվում. «Դու քիչ կարողություն ունես և իմ խոսքս պահեցիր ու իմ անունս չուարացար»", ["Ֆիլադելֆիա", "Սարդիկե", "Պերգամոն", "Զմյուռնիա"]), //Հայտն 3.8
        new Question("Ո՞րն է այն մխիթարական սաղմոսը, որի մեջ կան արևելք և արևմուտք բառերը", ["Սաղմոս 103", "Սաղմոս 46", "Սաղմոս 142", "Սաղմոս 105"]), //Սաղմ 103.12
        new Question("Ո՞ր երկրի մեջ գրվեց Օրինաց գիրքը", ["Մովաբ", "Եդոմ", "Նեգև", "Ամոն"]),
        new Question("Աստվածաշնչում «տահճիկ» բառը ո՞ր կենդանու հետ է գործածված", ["Ուխտի", "Էշի", "Ձիու", "Շան"]), //Երեմ. 2.23
        new Question("Հիսուսը քանի անգամ կանգնեց ատյանի առջև", ["6", "4", "5", "7"]), //6 անգամ - Աննան, Կայափան, Սինեդրիոն, Պիղատոս, Հերովդես, Պիղատոոս 
        new Question("Ո՞ր թագավորը տարավ տաճարի բոլոր գանձերը", ["Սավսակիմ", "Նաբուգոդոնոսոր", "Դարեհ", "Քիրամ"]), //Գ Թագ 14.25-26
        new Question("Ո՞րքան էր շաբաթ օրվա ճամփորդությունը", ["2000 կանգուն", "150 կանգուն", "120 մետր", "2.5 կմ"]),
        new Question("Ի՞նչը զուտ ոսկիով, պատվական եղեգնաքարով ու շափյուղայով չի գտնվում և դրա արժեքը թվարկվածներից բարձր է", ["Իմաստությունը", "Խոհեմությունը", "Բարությունը", "Առաքինությունը"]), //Հոբ 28.16 -- // responsive-ի համար հարցից հանել եմ՝ "Աստվածպաշտությունը" բառը և փոխել եմ "Բարություն" բառի
        new Question("Ո՞ր եկեղեցին էր թողել առաջին սերը", ["Եփեսոսի", "Պերգամոնի", "Զմյուռնայի", "Լյուստրայի"]), //Հատ 2.4
        new Question("Իսրայելի ո՞ր թագավորը ամենաերկարը թագավորեց", ["Մանասեն", "Ոզիա", "Հովաս", "Սողոմոն"]), // Դ Թագ. 21.1
        new Question("Քանի տարի թագավորեց Ոզիա թագավորը", ["52 տարի", "55 տարի", "44 տարի", "39 տարի"]), //Բ մնաց 26.3
        new Question("Ի՞նչն է Քրիստոսի մոտ սիրով գործում", ["Հավատքը", "Սերը", "Ճշմարտությունը", "Հույսը"]), //Գաղ 5.6  -- // responsive-ի համար հարցից հանել եմ՝ "Հավատարմությունը" բառը և փոխել եմ "Ճշմարտությունը" բառի
        new Question("Ո՞վ զգուշացրեց Հուդայի հարավային թագավորությանը, որ Աստծո դատաստանը իջնելու է Հուդայի վրա", ["Հովել", "Օսեե", "Եղիսե", "Ամոս"]),
        new Question("Հովսափատի որդին ու ժառանգորդը", ["Հորամ", "Օքոզիա", "Ասա", "Ամասիա"]),
        new Question("Ո՞ր թագավորը սպանվեց իր պալատականների կողմից", ["Ամոն", "Հովսիա", "Հովակիմ", "Հովաս"]),
        new Question("Եզեկիա թագավորի ծոռն էր՝", ["Սոփոնիա", "Օղդա", "Հովաս", "Հորամ"]),

        // Այս հարցերը հանվել է, որովհետև հարմար չէ responsive-ի համար
        // new Question("Ո՞ւմ աջ ձեռքի մեջ օրերի երկարություն, իսկ ձախ ձեռքի մեջ հարստություն ու փառք կա", ["Իմաստուն և հանճարեղ մարդու", "Բարի մարդու", "Զգուշավոր մարդու", "Խոհեմ մարդու"]), //Առ 3.13-16
        // new Question("Ի՞նչը դյուրին չի կտրվում", ["Երեքպատիկ դերձանը", "Քառապատիկ դերձանը", "Հնգապատիկ դերձանը", "Վեցապատիկ դերձանը"]), //Ժող 4.12
        // new Question("Կրակը այրում է", ["Նադաբին և Աբիուդին", "Կորխին, Դաթանին և Աբիրոնին", "Միսայելին և Եղիսափանին", "Ոզիելին և Ովգին"]), //Ղև 10.1-2
    ]
];
