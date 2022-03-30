import { Legislature } from './../interfaces/Legislature';
interface DeputyDataProp {
   voting: number;
   gender: boolean;
   legislature?: {
      legislatures: number[];
      length: number;
   };
   speech?: number;
   expenses?: {
      parliamentaryQuotaExpense: number;
      parliamentaryQuotaPeriod: number;
      cabinetExpense: number;
      cabinetPeriod: number;
   };
   presences?: {
      commissionPresence: number;
      commissionJustified: number;
      commissionMiss: number;
      plenaryPresence: number;
      plenaryJustified: number;
      plenaryMiss: number;
      ordemOfDayPresence: number;
      ordemOfDayMiss: number;
   };
}

//voting, gender, 9 valores (attedancePlenary, attendaceCommision),
//legislature, speech,
//parliamentaryQuotaBudget, months1, cabinetBudget, months2

export const deputyExtraDataDictionary:  { [id:  string]:  DeputyDataProp } = 
/*160592:  {voting: 22,gender: false},204517:  {voting: 90,gender: false},160632:  {voting: 88,gender: false},204559:  {voting: 22,gender: false},178889:  {voting: 21,gender: false},74439:  {voting: 32,gender: false},74044:  {voting: 88,gender: false},74043:  {voting: 86,gender: false},160518:  {voting: 46,gender: false},178952:  {voting: 88,gender: false},160569:  {voting: 20,gender: false},215044:  {voting: 0,gender: true},178992:  {voting: 83,gender: false},179587:  {voting: 96,gender: false},204532:  {voting: 84,gender: false},160591:  {voting: 91,gender: false},141555:  {voting: 89,gender: false},204483:  {voting: 31,gender: false},137070:  {voting: 92,gender: false},74283:  {voting: 22,gender: false},204396:  {voting: 93,gender: false},204505:  {voting: 88,gender: false},141553:  {voting: 83,gender: false},74376:  {voting: 23,gender: false},160610:  {voting: 21,gender: false},204385:  {voting: 69,gender: false},195866:  {voting: 90,gender: false},178863:  {voting: 83,gender: false},157130:  {voting: 30,gender: false},178934:  {voting: 91,gender: false},197438:  {voting: 91,gender: false},160976:  {voting: 59,gender: false},204519:  {voting: 82,gender: false},143084:  {voting: 85,gender: false},178862:  {voting: 0,gender: true},204466:  {voting: 75,gender: true},206231:  {voting: 41,gender: false},204464:  {voting: 15,gender: true},178922:  {voting: 32,gender: false},204534:  {voting: 54,gender: true},177282:  {voting: 38,gender: false},92776:  {voting: 92,gender: false},178947:  {voting: 91,gender: false},178946:  {voting: 73,gender: true},204425:  {voting: 88,gender: false},204360:  {voting: 46,gender: true},74356:  {voting: 89,gender: false},204557:  {voting: 89,gender: false},178961:  {voting: 81,gender: true},204437:  {voting: 89,gender: false},204438:  {voting: 91,gender: false},178933:  {voting: 89,gender: false},73808:  {voting: 93,gender: false},178921:  {voting: 92,gender: false},204387:  {voting: 94,gender: false},204416:  {voting: 96,gender: false},178990:  {voting: 84,gender: false},204535:  {voting: 16,gender: true},160635:  {voting: 77,gender: false},73604:  {voting: 22,gender: false},178887:  {voting: 21,gender: false},74371:  {voting: 20,gender: false},73466:  {voting: 76,gender: false},178935:  {voting: 0,gender: false},204357:  {voting: 81,gender: true},178945:  {voting: 89,gender: true},204525:  {voting: 63,gender: true},178861:  {voting: 93,gender: false},178930:  {voting: 91,gender: false},160651:  {voting: 95,gender: false},204480:  {voting: 19,gender: false},141531:  {voting: 82,gender: false},204366:  {voting: 88,gender: false},204530:  {voting: 44,gender: false},160653:  {voting: 86,gender: false},152610:  {voting: 91,gender: false},204489:  {voting: 39,gender: false},178920:  {voting: 88,gender: false},213274:  {voting: 55,gender: false},160655:  {voting: 80,gender: false},204362:  {voting: 93,gender: false},215042:  {voting: 0,gender: false},73788:  {voting: 91,gender: false},73801:  {voting: 27,gender: false},178989:  {voting: 83,gender: true},178925:  {voting: 25,gender: true},205865:  {voting: 91,gender: false},74161:  {voting: 22,gender: false},141523:  {voting: 86,gender: false},204567:  {voting: 90,gender: false},178951:  {voting: 34,gender: false},204467:  {voting: 21,gender: true},160641:  {voting: 26,gender: true},160639:  {voting: 81,gender: true},204565:  {voting: 90,gender: true},204446:  {voting: 94,gender: false},204383:  {voting: 43,gender: false},204390:  {voting: 92,gender: false},160601:  {voting: 95,gender: false},73486:  {voting: 41,gender: false},204529:  {voting: 94,gender: true},204524:  {voting: 92,gender: false},73943:  {voting: 30,gender: true},204406:  {voting: 93,gender: false},178844:  {voting: 0,gender: false},160604:  {voting: 18,gender: false},204395:  {voting: 92,gender: false},122974:  {voting: 90,gender: false},217330:  {voting: 0,gender: false},178912:  {voting: 81,gender: false},215045:  {voting: 0,gender: false},90201:  {voting: 84,gender: false},216544:  {voting: 0,gender: false},141488:  {voting: 21,gender: false},133968:  {voting: 34,gender: false},74400:  {voting: 21,gender: false},141518:  {voting: 72,gender: false},74574:  {voting: 87,gender: false},204492:  {voting: 22,gender: false},204461:  {voting: 82,gender: false},160558:  {voting: 93,gender: false},193726:  {voting: 88,gender: false},204538:  {voting: 88,gender: false},178860:  {voting: 88,gender: false},141516:  {voting: 87,gender: false},171617:  {voting: 20,gender: false},204377:  {voting: 83,gender: true},74160:  {voting: 20,gender: false},204553:  {voting: 49,gender: false},204570:  {voting: 92,gender: false},160642:  {voting: 95,gender: false},160556:  {voting: 20,gender: false},204573:  {voting: 78,gender: false},204475:  {voting: 87,gender: false},204441:  {voting: 93,gender: false},141515:  {voting: 0,gender: false},204422:  {voting: 90,gender: false},73692:  {voting: 95,gender: false},73463:  {voting: 0,gender: false},204363:  {voting: 90,gender: false},178987:  {voting: 30,gender: false},204498:  {voting: 88,gender: false},74159:  {voting: 24,gender: false},66179:  {voting: 86,gender: true},194260:  {voting: 88,gender: false},178986:  {voting: 21,gender: false},74352:  {voting: 85,gender: false},204479:  {voting: 94,gender: false},178896:  {voting: 87,gender: false},74165:  {voting: 0,gender: false},146307:  {voting: 92,gender: false},204415:  {voting: 91,gender: false},204449:  {voting: 96,gender: false},204453:  {voting: 21,gender: true},178997:  {voting: 86,gender: false},178895:  {voting: 93,gender: false},92172:  {voting: 0,gender: false},178985:  {voting: 88,gender: false},188097:  {voting: 22,gender: false},141508:  {voting: 37,gender: false},74749:  {voting: 87,gender: false},75431:  {voting: 91,gender: false},178843:  {voting: 91,gender: false},204566:  {voting: 89,gender: false},204403:  {voting: 75,gender: false},178858:  {voting: 81,gender: false},74158:  {voting: 36,gender: false},204432:  {voting: 88,gender: true},204428:  {voting: 20,gender: true},178956:  {voting: 84,gender: true},204540:  {voting: 90,gender: true},74398:  {voting: 21,gender: true},204430:  {voting: 88,gender: true},178943:  {voting: 0,gender: false},204506:  {voting: 79,gender: false},204431:  {voting: 89,gender: false},160535:  {voting: 20,gender: false},204522:  {voting: 90,gender: false},150418:  {voting: 89,gender: false},204452:  {voting: 94,gender: false},179001:  {voting: 89,gender: false},178983:  {voting: 93,gender: false},204556:  {voting: 92,gender: false},204558:  {voting: 30,gender: false},133810:  {voting: 89,gender: false},76874:  {voting: 16,gender: false},205863:  {voting: 96,gender: false},146788:  {voting: 90,gender: false},179000:  {voting: 85,gender: false},156190:  {voting: 80,gender: false},204471:  {voting: 82,gender: true},204458:  {voting: 95,gender: true},166402:  {voting: 92,gender: true},178866:  {voting: 18,gender: true},204418:  {voting: 89,gender: false},74784:  {voting: 20,gender: true},204526:  {voting: 91,gender: false},162332:  {voting: 93,gender: false},204455:  {voting: 94,gender: false},204485:  {voting: 88,gender: false},204448:  {voting: 89,gender: false},204410:  {voting: 88,gender: true},160510:  {voting: 92,gender: false},204381:  {voting: 86,gender: false},178954:  {voting: 87,gender: false},178931:  {voting: 51,gender: false},74478:  {voting: 84,gender: false},178879:  {voting: 85,gender: false},204404:  {voting: 86,gender: false},204523:  {voting: 83,gender: false},196358:  {voting: 90,gender: false},204382:  {voting: 89,gender: false},204405:  {voting: 61,gender: true},74585:  {voting: 88,gender: false},139285:  {voting: 28,gender: true},92102:  {voting: 90,gender: false},74299:  {voting: 35,gender: false},74254:  {voting: 0,gender: false},74156:  {voting: 23,gender: false},204547:  {voting: 91,gender: false},204359:  {voting: 82,gender: false},178825:  {voting: 25,gender: false},204375:  {voting: 90,gender: true},178832:  {voting: 65,gender: true},160534:  {voting: 91,gender: true},98057:  {voting: 89,gender: false},141478:  {voting: 0,gender: false},151208:  {voting: 91,gender: false},204536:  {voting: 83,gender: false},178886:  {voting: 86,gender: false},204550:  {voting: 91,gender: false},204574:  {voting: 91,gender: false},204497:  {voting: 92,gender: false},204520:  {voting: 94,gender: false},74253:  {voting: 0,gender: false},73586:  {voting: 35,gender: false},204372:  {voting: 90,gender: false},74317:  {voting: 93,gender: false},204420:  {voting: 92,gender: false},204474:  {voting: 87,gender: false},215043:  {voting: 0,gender: false},204563:  {voting: 91,gender: false},209189:  {voting: 22,gender: false},74554:  {voting: 95,gender: false},204555:  {voting: 20,gender: false},74079:  {voting: 88,gender: false},160619:  {voting: 89,gender: false},204391:  {voting: 81,gender: false},204472:  {voting: 94,gender: false},204386:  {voting: 88,gender: false},141470:  {voting: 24,gender: false},141464:  {voting: 22,gender: false},178857:  {voting: 20,gender: false},205550:  {voting: 90,gender: false},217480:  {voting: 0,gender: false},204546:  {voting: 85,gender: true},204468:  {voting: 33,gender: true},178910:  {voting: 94,gender: false},112437:  {voting: 89,gender: false},141459:  {voting: 92,gender: false},178970:  {voting: 21,gender: false},141458:  {voting: 93,gender: false},74366:  {voting: 90,gender: false},160531:  {voting: 88,gender: false},204435:  {voting: 43,gender: false},178839:  {voting: 88,gender: true},160570:  {voting: 90,gender: false},74273:  {voting: 80,gender: false},108338:  {voting: 90,gender: true},74848:  {voting: 27,gender: true},73531:  {voting: 15,gender: false},204436:  {voting: 84,gender: false},67138:  {voting: 91,gender: true},204508:  {voting: 83,gender: false},204564:  {voting: 82,gender: false},204533:  {voting: 31,gender: false},160674:  {voting: 84,gender: false},141450:  {voting: 90,gender: false},178959:  {voting: 89,gender: false},178884:  {voting: 88,gender: false},73772:  {voting: 79,gender: false},178981:  {voting: 90,gender: false},204539:  {voting: 88,gender: false},73482:  {voting: 20,gender: false},204444:  {voting: 96,gender: false},178909:  {voting: 88,gender: false},204373:  {voting: 83,gender: false},178873:  {voting: 20,gender: false},178964:  {voting: 30,gender: false},204548:  {voting: 91,gender: false},204465:  {voting: 90,gender: false},204456:  {voting: 88,gender: false},204408:  {voting: 90,gender: false},73460:  {voting: 47,gender: false},204442:  {voting: 93,gender: false},160667:  {voting: 91,gender: false},204531:  {voting: 96,gender: false},204513:  {voting: 92,gender: false},198197:  {voting: 92,gender: true},74419:  {voting: 31,gender: false},107283:  {voting: 20,gender: true},204419:  {voting: 88,gender: false},152605:  {voting: 15,gender: false},178996:  {voting: 89,gender: false},160673:  {voting: 92,gender: false},204365:  {voting: 83,gender: false},74270:  {voting: 90,gender: false},204491:  {voting: 90,gender: false},204575:  {voting: 79,gender: false},74383:  {voting: 93,gender: false},204394:  {voting: 31,gender: false},178966:  {voting: 86,gender: true},204527:  {voting: 87,gender: false},204484:  {voting: 93,gender: false},204473:  {voting: 95,gender: false},160669:  {voting: 88,gender: false},115746:  {voting: 92,gender: false},74200:  {voting: 76,gender: false},204393:  {voting: 20,gender: false},204494:  {voting: 88,gender: false},204510:  {voting: 89,gender: false},204392:  {voting: 93,gender: false},191923:  {voting: 73,gender: false},141434:  {voting: 88,gender: false},160598:  {voting: 37,gender: true},204411:  {voting: 95,gender: false},204427:  {voting: 83,gender: false},92699:  {voting: 87,gender: false},141431:  {voting: 89,gender: false},204407:  {voting: 15,gender: true},160666:  {voting: 44,gender: false},204371:  {voting: 64,gender: false},204398:  {voting: 92,gender: false},72442:  {voting: 55,gender: false},204477:  {voting: 91,gender: false},66828:  {voting: 83,gender: false},160587:  {voting: 83,gender: false},204368:  {voting: 93,gender: false},171623:  {voting: 87,gender: false},141427:  {voting: 86,gender: false},178969:  {voting: 73,gender: false},68720:  {voting: 46,gender: false},178953:  {voting: 74,gender: false},178871:  {voting: 93,gender: false},204482:  {voting: 89,gender: false},160640:  {voting: 94,gender: false},160575:  {voting: 21,gender: true},204537:  {voting: 74,gender: false},132504:  {voting: 21,gender: false},161550:  {voting: 79,gender: false},198783:  {voting: 83,gender: false},178854:  {voting: 87,gender: false},204389:  {voting: 29,gender: false},160532:  {voting: 87,gender: false},204364:  {voting: 79,gender: false},74075:  {voting: 87,gender: true},141422:  {voting: 88,gender: false},141421:  {voting: 86,gender: false},178977:  {voting: 85,gender: false},204500:  {voting: 87,gender: false},92346:  {voting: 95,gender: false},204541:  {voting: 45,gender: false},74655:  {voting: 82,gender: false},204421:  {voting: 82,gender: true},141417:  {voting: 91,gender: false},204562:  {voting: 92,gender: false},178994:  {voting: 87,gender: true},204434:  {voting: 87,gender: true},81297:  {voting: 95,gender: true},204412:  {voting: 88,gender: false},204351:  {voting: 95,gender: false},204450:  {voting: 89,gender: false},204439:  {voting: 85,gender: false},204481:  {voting: 95,gender: false},204518:  {voting: 93,gender: false},160758:  {voting: 87,gender: false},143632:  {voting: 92,gender: false},160599:  {voting: 92,gender: false},178929:  {voting: 91,gender: false},160588:  {voting: 92,gender: false},204542:  {voting: 32,gender: false},164359:  {voting: 85,gender: false},204569:  {voting: 92,gender: false},204512:  {voting: 91,gender: false},178908:  {voting: 96,gender: false},204451:  {voting: 73,gender: false},204511:  {voting: 86,gender: false},205548:  {voting: 18,gender: false},116379:  {voting: 93,gender: false},62881:  {voting: 68,gender: false},160528:  {voting: 31,gender: false},204459:  {voting: 87,gender: true},204409:  {voting: 87,gender: false},204454:  {voting: 95,gender: false},204367:  {voting: 95,gender: false},178916:  {voting: 74,gender: false},74060:  {voting: 28,gender: false},74467:  {voting: 37,gender: false},141411:  {voting: 36,gender: false},204355:  {voting: 85,gender: false},135054:  {voting: 91,gender: false},178963:  {voting: 0,gender: false},204514:  {voting: 95,gender: false},204378:  {voting: 95,gender: false},204376:  {voting: 96,gender: false},141408:  {voting: 90,gender: false},74537:  {voting: 95,gender: false},178939:  {voting: 56,gender: true},204440:  {voting: 89,gender: false},178928:  {voting: 92,gender: true},204462:  {voting: 95,gender: true},204476:  {voting: 90,gender: false},141439:  {voting: 32,gender: false},204490:  {voting: 93,gender: false},205476:  {voting: 81,gender: false},204504:  {voting: 92,gender: false},204496:  {voting: 89,gender: false},73441:  {voting: 93,gender: false},141405:  {voting: 89,gender: false},204488:  {voting: 44,gender: false},178876:  {voting: 88,gender: false},204370:  {voting: 19,gender: false},204380:  {voting: 89,gender: true},204499:  {voting: 47,gender: false},204369:  {voting: 95,gender: true},164360:  {voting: 75,gender: true},141398:  {voting: 23,gender: false},204426:  {voting: 22,gender: false},74262:  {voting: 83,gender: false},204460:  {voting: 94,gender: false},178993:  {voting: 91,gender: false},178962:  {voting: 90,gender: false},204361:  {voting: 87,gender: false},141401:  {voting: 83,gender: false},204507:  {voting: 95,gender: true},213762:  {voting: 82,gender: true},204487:  {voting: 72,gender: false},178924:  {voting: 89,gender: false},178829:  {voting: 93,gender: false},204572:  {voting: 94,gender: false},204352:  {voting: 29,gender: false},93083:  {voting: 91,gender: false},160589:  {voting: 73,gender: true},204502:  {voting: 88,gender: false},204551:  {voting: 87,gender: false},74052:  {voting: 91,gender: false},160538:  {voting: 19,gender: false},204561:  {voting: 28,gender: false},141513:  {voting: 88,gender: false},204388:  {voting: 96,gender: false},204374:  {voting: 94,gender: true},207176:  {voting: 84,gender: true},178948:  {voting: 88,gender: false},204358:  {voting: 84,gender: false},141335:  {voting: 21,gender: false},109429:  {voting: 89,gender: false},73701:  {voting: 23,gender: true},178975:  {voting: 87,gender: false},69871:  {voting: 25,gender: false},160512:  {voting: 83,gender: false},204509:  {voting: 14,gender: true},160665:  {voting: 86,gender: false},74459:  {voting: 92,gender: false},74090:  {voting: 90,gender: false},160600:  {voting: 86,gender: false},160541:  {voting: 86,gender: false},204414:  {voting: 91,gender: false},141391:  {voting: 79,gender: false},73433:  {voting: 21,gender: false},160553:  {voting: 89,gender: false},74212:  {voting: 89,gender: false},73696:  {voting: 85,gender: true},204515:  {voting: 54,gender: false},178882:  {voting: 89,gender: false},133439:  {voting: 35,gender: false},204423:  {voting: 92,gender: false},74471:  {voting: 91,gender: false},178831:  {voting: 93,gender: false},204356:  {voting: 91,gender: false},178881:  {voting: 94,gender: false},178937:  {voting: 87,gender: false},204400:  {voting: 95,gender: true},204353:  {voting: 83,gender: true},178927:  {voting: 34,gender: false},74057:  {voting: 25,gender: true},204516:  {voting: 84,gender: false},204503:  {voting: 21,gender: false},160545:  {voting: 88,gender: false},204544:  {voting: 70,gender: false},204571:  {voting: 64,gender: false},178972:  {voting: 74,gender: false},160511:  {voting: 27,gender: false},204501:  {voting: 20,gender: false},204545:  {voting: 95,gender: true},204413:  {voting: 95,gender: false},160559:  {voting: 90,gender: false},178836:  {voting: 88,gender: false},204549:  {voting: 91,gender: false},204495:  {voting: 22,gender: false},160527:  {voting: 87,gender: false},178835:  {voting: 41,gender: false},136811:  {voting: 92,gender: false},160508:  {voting: 24,gender: false},141372:  {voting: 0,gender: false},74646:  {voting: 86,gender: false},121948:  {voting: 93,gender: false},204528:  {voting: 84,gender: true},204560:  {voting: 90,gender: false},204379:  {voting: 89,gender: false},204521:  {voting: 91,gender: false},204554:  {voting: 90,gender: false}*/
{
   0: {
      voting: 0,
      gender: false,
      legislature: {
         legislatures: [
            0
         ],
         length: 1
      },
      speech: 0,
      expenses: {
         parliamentaryQuotaExpense: 0,
         parliamentaryQuotaPeriod: 0,
         cabinetExpense: 0,
         cabinetPeriod: 0
      },
      presences: {
         commissionPresence: 0,
         commissionJustified: 0,
         commissionMiss: 0,
         plenaryPresence: 0,
         plenaryJustified: 0,
         plenaryMiss: 0,
         ordemOfDayPresence: 0,
         ordemOfDayMiss: 0
      }
   },
   62881: {
      voting: 68,
      gender: false,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 40,
      expenses: {
         parliamentaryQuotaExpense: 230831.17,
         parliamentaryQuotaPeriod: 7,
         cabinetExpense: 111538.36,
         cabinetPeriod: 4
      },
      presences: {
         commissionPresence: 171,
         commissionJustified: 1,
         commissionMiss: 23,
         plenaryPresence: 41,
         plenaryJustified: 0,
         plenaryMiss: 0,
         ordemOfDayPresence: 60,
         ordemOfDayMiss: 2
      }
   },
   66179: {
      voting: 86,
      gender: true,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 4,
      expenses: {
         parliamentaryQuotaExpense: 443723.09,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2664732.54,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 423,
         commissionJustified: 10,
         commissionMiss: 53,
         plenaryPresence: 201,
         plenaryJustified: 14,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 1
      }
   },
   66828: {
      voting: 83,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 14,
      expenses: {
         parliamentaryQuotaExpense: 673949.33,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2503638.01,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 153,
         commissionJustified: 15,
         commissionMiss: 134,
         plenaryPresence: 190,
         plenaryJustified: 16,
         plenaryMiss: 9,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 12
      }
   },
   67138: {
      voting: 91,
      gender: true,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 75,
      expenses: {
         parliamentaryQuotaExpense: 899752.48,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2669591.97,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 51,
         commissionJustified: 6,
         commissionMiss: 108,
         plenaryPresence: 193,
         plenaryJustified: 13,
         plenaryMiss: 9,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 16
      }
   },
   68720: {
      voting: 46,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 109,
      expenses: {
         parliamentaryQuotaExpense: 922390.05,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2447169.4,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 574,
         commissionJustified: 5,
         commissionMiss: 88,
         plenaryPresence: 212,
         plenaryJustified: 3,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 0
      }
   },
   69871: {
      voting: 25,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 94,
      expenses: {
         parliamentaryQuotaExpense: 873302.34,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2675749.38,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 259,
         commissionJustified: 3,
         commissionMiss: 161,
         plenaryPresence: 198,
         plenaryJustified: 5,
         plenaryMiss: 12,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 16
      }
   },
   72442: {
      voting: 55,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 55,
      expenses: {
         parliamentaryQuotaExpense: 343381.02,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2562908.34,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 378,
         commissionJustified: 2,
         commissionMiss: 142,
         plenaryPresence: 191,
         plenaryJustified: 7,
         plenaryMiss: 17,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 19
      }
   },
   73433: {
      voting: 21,
      gender: false,
      legislature: {
         legislatures: [
            52,
            53,
            54,
            55,
            56
         ],
         length: 5
      },
      speech: 96,
      expenses: {
         parliamentaryQuotaExpense: 672429.22,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2652306.31,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 236,
         commissionJustified: 42,
         commissionMiss: 57,
         plenaryPresence: 208,
         plenaryJustified: 7,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 0
      }
   },
   73441: {
      voting: 93,
      gender: false,
      legislature: {
         legislatures: [
            52,
            53,
            55,
            56
         ],
         length: 4
      },
      speech: 16,
      expenses: {
         parliamentaryQuotaExpense: 480411.4,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2389196.46,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 229,
         commissionJustified: 29,
         commissionMiss: 60,
         plenaryPresence: 205,
         plenaryJustified: 7,
         plenaryMiss: 3,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 8
      }
   },
   73460: {
      voting: 47,
      gender: false,
      legislature: {
         legislatures: [
            52,
            53,
            56
         ],
         length: 3
      },
      speech: 18,
      expenses: {
         parliamentaryQuotaExpense: 299998.9,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2453090.36,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 309,
         commissionJustified: 3,
         commissionMiss: 7,
         plenaryPresence: 213,
         plenaryJustified: 2,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 0
      }
   },
   73463: {
      voting: 0,
      gender: false,
      legislature: {
         legislatures: [
            52,
            53,
            54,
            55,
            56
         ],
         length: 5
      },
      speech: 0,
      expenses: {
         parliamentaryQuotaExpense: 33415.34,
         parliamentaryQuotaPeriod: 1,
         cabinetExpense: 111495.77,
         cabinetPeriod: 1
      },
      presences: {
         commissionPresence: 0,
         commissionJustified: 0,
         commissionMiss: 0,
         plenaryPresence: 0,
         plenaryJustified: 0,
         plenaryMiss: 0,
         ordemOfDayPresence: 0,
         ordemOfDayMiss: 0
      }
   },
   73466: {
      voting: 76,
      gender: false,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 104,
      expenses: {
         parliamentaryQuotaExpense: 633039.72,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2564397.84,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 346,
         commissionJustified: 17,
         commissionMiss: 18,
         plenaryPresence: 197,
         plenaryJustified: 18,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 0
      }
   },
   73482: {
      voting: 20,
      gender: false,
      legislature: {
         legislatures: [
            52,
            53,
            54,
            55,
            56
         ],
         length: 5
      },
      speech: 256,
      expenses: {
         parliamentaryQuotaExpense: 674244.73,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2620815.36,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 119,
         commissionJustified: 4,
         commissionMiss: 64,
         plenaryPresence: 210,
         plenaryJustified: 4,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 4
      }
   },
   73486: {
      voting: 41,
      gender: false,
      legislature: {
         legislatures: [
            52,
            53,
            55,
            56
         ],
         length: 4
      },
      speech: 504,
      expenses: {
         parliamentaryQuotaExpense: 933006.19,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2670841.69,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 409,
         commissionJustified: 22,
         commissionMiss: 133,
         plenaryPresence: 193,
         plenaryJustified: 17,
         plenaryMiss: 5,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 7
      }
   },
   73531: {
      voting: 15,
      gender: false,
      legislature: {
         legislatures: [
            52,
            53,
            54,
            55,
            56
         ],
         length: 5
      },
      speech: 449,
      expenses: {
         parliamentaryQuotaExpense: 482037.52,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2518144.2,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 376,
         commissionJustified: 12,
         commissionMiss: 45,
         plenaryPresence: 205,
         plenaryJustified: 9,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 1
      }
   },
   73586: {
      voting: 35,
      gender: false,
      legislature: {
         legislatures: [
            52,
            53,
            54,
            55,
            56
         ],
         length: 5
      },
      speech: 45,
      expenses: {
         parliamentaryQuotaExpense: 701339.31,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2663473.77,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 530,
         commissionJustified: 26,
         commissionMiss: 114,
         plenaryPresence: 200,
         plenaryJustified: 14,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 3
      }
   },
   73604: {
      voting: 22,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 38,
      expenses: {
         parliamentaryQuotaExpense: 787493.4,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2536311.79,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 388,
         commissionJustified: 3,
         commissionMiss: 107,
         plenaryPresence: 208,
         plenaryJustified: 5,
         plenaryMiss: 2,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 3
      }
   },
   73692: {
      voting: 95,
      gender: false,
      legislature: {
         legislatures: [
            52,
            53,
            54,
            55,
            56
         ],
         length: 5
      },
      speech: 3,
      expenses: {
         parliamentaryQuotaExpense: 410932.8,
         parliamentaryQuotaPeriod: 13,
         cabinetExpense: 1144129,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 295,
         commissionJustified: 4,
         commissionMiss: 10,
         plenaryPresence: 89,
         plenaryJustified: 8,
         plenaryMiss: 0,
         ordemOfDayPresence: 128,
         ordemOfDayMiss: 0
      }
   },
   73696: {
      voting: 85,
      gender: true,
      legislature: {
         legislatures: [
            53,
            56
         ],
         length: 2
      },
      speech: 34,
      expenses: {
         parliamentaryQuotaExpense: 660499.97,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2425523.51,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 922,
         commissionJustified: 17,
         commissionMiss: 1,
         plenaryPresence: 198,
         plenaryJustified: 17,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 0
      }
   },
   73701: {
      voting: 23,
      gender: true,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 242,
      expenses: {
         parliamentaryQuotaExpense: 844792.47,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2638238.9,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 301,
         commissionJustified: 18,
         commissionMiss: 194,
         plenaryPresence: 203,
         plenaryJustified: 9,
         plenaryMiss: 3,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 5
      }
   },
   73772: {
      voting: 79,
      gender: false,
      legislature: {
         legislatures: [
            52,
            53,
            54,
            55,
            56
         ],
         length: 5
      },
      speech: 1,
      expenses: {
         parliamentaryQuotaExpense: 780729.96,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2670594.22,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 21,
         commissionJustified: 0,
         commissionMiss: 102,
         plenaryPresence: 209,
         plenaryJustified: 5,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 12
      }
   },
   73788: {
      voting: 91,
      gender: false,
      legislature: {
         legislatures: [
            52,
            53,
            55,
            56
         ],
         length: 4
      },
      speech: 65,
      expenses: {
         parliamentaryQuotaExpense: 922879.66,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2526826.26,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 252,
         commissionJustified: 13,
         commissionMiss: 112,
         plenaryPresence: 194,
         plenaryJustified: 12,
         plenaryMiss: 9,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 18
      }
   },
   73801: {
      voting: 27,
      gender: false,
      legislature: {
         legislatures: [
            52,
            53,
            56
         ],
         length: 3
      },
      speech: 76,
      expenses: {
         parliamentaryQuotaExpense: 590726.71,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2333168.45,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 118,
         commissionJustified: 0,
         commissionMiss: 70,
         plenaryPresence: 208,
         plenaryJustified: 2,
         plenaryMiss: 5,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 5
      }
   },
   73808: {
      voting: 93,
      gender: false,
      legislature: {
         legislatures: [
            53,
            54,
            55,
            56
         ],
         length: 4
      },
      speech: 0,
      expenses: {
         parliamentaryQuotaExpense: 545940.51,
         parliamentaryQuotaPeriod: 18,
         cabinetExpense: 2001600.89,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 131,
         commissionJustified: 3,
         commissionMiss: 90,
         plenaryPresence: 129,
         plenaryJustified: 9,
         plenaryMiss: 8,
         ordemOfDayPresence: 197,
         ordemOfDayMiss: 9
      }
   },
   73943: {
      voting: 30,
      gender: true,
      legislature: {
         legislatures: [
            52,
            53,
            54,
            56
         ],
         length: 4
      },
      speech: 490,
      expenses: {
         parliamentaryQuotaExpense: 1063353.42,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2509431.14,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 469,
         commissionJustified: 16,
         commissionMiss: 68,
         plenaryPresence: 210,
         plenaryJustified: 3,
         plenaryMiss: 2,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 5
      }
   },
   74043: {
      voting: 86,
      gender: false,
      legislature: {
         legislatures: [
            52,
            53,
            54,
            55,
            56
         ],
         length: 5
      },
      speech: 16,
      expenses: {
         parliamentaryQuotaExpense: 1042198.37,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2671895.92,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 16,
         commissionJustified: 27,
         commissionMiss: 46,
         plenaryPresence: 156,
         plenaryJustified: 58,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 2
      }
   },
   74044: {
      voting: 88,
      gender: false,
      legislature: {
         legislatures: [
            52,
            53,
            56
         ],
         length: 3
      },
      speech: 36,
      expenses: {
         parliamentaryQuotaExpense: 913259.21,
         parliamentaryQuotaPeriod: 22,
         cabinetExpense: 2551676.37,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 170,
         commissionJustified: 8,
         commissionMiss: 121,
         plenaryPresence: 208,
         plenaryJustified: 5,
         plenaryMiss: 0,
         ordemOfDayPresence: 286,
         ordemOfDayMiss: 6
      }
   },
   74052: {
      voting: 91,
      gender: false,
      legislature: {
         legislatures: [
            52,
            55,
            56
         ],
         length: 3
      },
      speech: 20,
      expenses: {
         parliamentaryQuotaExpense: 683005.47,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 1903274.92,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 254,
         commissionJustified: 8,
         commissionMiss: 46,
         plenaryPresence: 202,
         plenaryJustified: 10,
         plenaryMiss: 3,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 3
      }
   },
   74057: {
      voting: 25,
      gender: true,
      legislature: {
         legislatures: [
            52,
            53,
            54,
            55,
            56
         ],
         length: 5
      },
      speech: 491,
      expenses: {
         parliamentaryQuotaExpense: 940936.36,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2646070.49,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 438,
         commissionJustified: 14,
         commissionMiss: 176,
         plenaryPresence: 209,
         plenaryJustified: 4,
         plenaryMiss: 2,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 2
      }
   },
   74060: {
      voting: 28,
      gender: false,
      legislature: {
         legislatures: [
            52,
            53,
            54,
            55,
            56
         ],
         length: 5
      },
      speech: 290,
      expenses: {
         parliamentaryQuotaExpense: 966647.85,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2666801.83,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 148,
         commissionJustified: 9,
         commissionMiss: 94,
         plenaryPresence: 199,
         plenaryJustified: 15,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 1
      }
   },
   74075: {
      voting: 87,
      gender: true,
      legislature: {
         legislatures: [
            53,
            54,
            55,
            56
         ],
         length: 4
      },
      speech: 5,
      expenses: {
         parliamentaryQuotaExpense: 641481.45,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2433063.91,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 156,
         commissionJustified: 83,
         commissionMiss: 136,
         plenaryPresence: 154,
         plenaryJustified: 48,
         plenaryMiss: 13,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 24
      }
   },
   74079: {
      voting: 88,
      gender: false,
      legislature: {
         legislatures: [
            52,
            54,
            55,
            56
         ],
         length: 4
      },
      speech: 1,
      expenses: {
         parliamentaryQuotaExpense: 559957.81,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2449448.79,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 49,
         commissionJustified: 2,
         commissionMiss: 5,
         plenaryPresence: 162,
         plenaryJustified: 15,
         plenaryMiss: 38,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 43
      }
   },
   74090: {
      voting: 90,
      gender: false,
      legislature: {
         legislatures: [
            52,
            53,
            54,
            55,
            56
         ],
         length: 5
      },
      speech: 23,
      expenses: {
         parliamentaryQuotaExpense: 784178.42,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2661248.85,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 169,
         commissionJustified: 15,
         commissionMiss: 210,
         plenaryPresence: 183,
         plenaryJustified: 28,
         plenaryMiss: 4,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 5
      }
   },
   74156: {
      voting: 23,
      gender: false,
      legislature: {
         legislatures: [
            52,
            53,
            54,
            55,
            56
         ],
         length: 5
      },
      speech: 79,
      expenses: {
         parliamentaryQuotaExpense: 816548.25,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2656168.8,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 805,
         commissionJustified: 17,
         commissionMiss: 142,
         plenaryPresence: 203,
         plenaryJustified: 9,
         plenaryMiss: 3,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 5
      }
   },
   74158: {
      voting: 36,
      gender: false,
      legislature: {
         legislatures: [
            52,
            53,
            54,
            55,
            56
         ],
         length: 5
      },
      speech: 14,
      expenses: {
         parliamentaryQuotaExpense: 710523.85,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2506177.28,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 164,
         commissionJustified: 0,
         commissionMiss: 117,
         plenaryPresence: 192,
         plenaryJustified: 23,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 0
      }
   },
   74159: {
      voting: 24,
      gender: false,
      legislature: {
         legislatures: [
            52,
            53,
            54,
            55,
            56
         ],
         length: 5
      },
      speech: 20,
      expenses: {
         parliamentaryQuotaExpense: 906541.71,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2635100.93,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 192,
         commissionJustified: 13,
         commissionMiss: 57,
         plenaryPresence: 205,
         plenaryJustified: 10,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 0
      }
   },
   74160: {
      voting: 20,
      gender: false,
      legislature: {
         legislatures: [
            52,
            55,
            56
         ],
         length: 3
      },
      speech: 1,
      expenses: {
         parliamentaryQuotaExpense: 739536.55,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2535179.85,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 414,
         commissionJustified: 11,
         commissionMiss: 40,
         plenaryPresence: 192,
         plenaryJustified: 12,
         plenaryMiss: 11,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 17
      }
   },
   74161: {
      voting: 22,
      gender: false,
      legislature: {
         legislatures: [
            52,
            53,
            54,
            55,
            56
         ],
         length: 5
      },
      speech: 245,
      expenses: {
         parliamentaryQuotaExpense: 722236.52,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2561377.8,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 747,
         commissionJustified: 11,
         commissionMiss: 266,
         plenaryPresence: 210,
         plenaryJustified: 1,
         plenaryMiss: 4,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 7
      }
   },
   74165: {
      voting: 0,
      gender: false,
      legislature: {
         legislatures: [
            52,
            53,
            56
         ],
         length: 3
      },
      speech: 0,
      expenses: {
         parliamentaryQuotaExpense: 0,
         parliamentaryQuotaPeriod: 0,
         cabinetExpense: 0,
         cabinetPeriod: 3
      },
      presences: {
         commissionPresence: 224,
         commissionJustified: 0,
         commissionMiss: 5,
         plenaryPresence: 0,
         plenaryJustified: 0,
         plenaryMiss: 0,
         ordemOfDayPresence: 0,
         ordemOfDayMiss: 0
      }
   },
   74200: {
      voting: 76,
      gender: false,
      legislature: {
         legislatures: [
            52,
            53,
            54,
            56
         ],
         length: 4
      },
   },
   74212: {
      voting: 89,
      gender: false
   },
   74253: {
      voting: 0,
      gender: false,
      legislature: {
         legislatures: [
            52,
            54,
            55,
            56
         ],
         length: 4
      },
   },
   74254: {
      voting: 0,
      gender: false
   },
   74262: {
      voting: 83,
      gender: false,
      legislature: {
         legislatures: [
            52,
            53,
            54,
            55,
            56
         ],
         length: 5
      },
      speech: 65,
      expenses: {
         parliamentaryQuotaExpense: 698248.34,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2427633.44,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 142,
         commissionJustified: 7,
         commissionMiss: 20,
         plenaryPresence: 191,
         plenaryJustified: 24,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 0
      }
   },
   74270: {
      voting: 90,
      gender: false,
      legislature: {
         legislatures: [
            52,
            55,
            56
         ],
         length: 3
      },
      speech: 43,
      expenses: {
         parliamentaryQuotaExpense: 773755.72,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2640330.14,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 112,
         commissionJustified: 61,
         commissionMiss: 80,
         plenaryPresence: 204,
         plenaryJustified: 10,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 9
      }
   },
   74273: {
      voting: 80,
      gender: false,
      legislature: {
         legislatures: [
            52,
            53,
            54,
            55,
            56
         ],
         length: 5
      },
      speech: 18,
      expenses: {
         parliamentaryQuotaExpense: 621735.1,
         parliamentaryQuotaPeriod: 22,
         cabinetExpense: 2678090.92,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 170,
         commissionJustified: 12,
         commissionMiss: 27,
         plenaryPresence: 165,
         plenaryJustified: 17,
         plenaryMiss: 4,
         ordemOfDayPresence: 251,
         ordemOfDayMiss: 10
      }
   },
   74283: {
      voting: 22,
      gender: false,
      legislature: {
         legislatures: [
            52,
            53,
            54,
            55,
            56
         ],
         length: 5
      },
      speech: 220,
      expenses: {
         parliamentaryQuotaExpense: 582309.92,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2653128.77,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 99,
         commissionJustified: 17,
         commissionMiss: 82,
         plenaryPresence: 200,
         plenaryJustified: 13,
         plenaryMiss: 2,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 6
      }
   },
   74299: {
      voting: 35,
      gender: false,
      legislature: {
         legislatures: [
            52,
            55,
            56
         ],
         length: 3
      },
      speech: 62,
      expenses: {
         parliamentaryQuotaExpense: 787338.03,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2244531.8,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 490,
         commissionJustified: 20,
         commissionMiss: 145,
         plenaryPresence: 207,
         plenaryJustified: 6,
         plenaryMiss: 2,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 4
      }
   },
   74317: {
      voting: 93,
      gender: false,
      legislature: {
         legislatures: [
            52,
            53,
            54,
            55,
            56
         ],
         length: 5
      },
      speech: 128,
      expenses: {
         parliamentaryQuotaExpense: 991394.01,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2660754.86,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 200,
         commissionJustified: 2,
         commissionMiss: 65,
         plenaryPresence: 200,
         plenaryJustified: 13,
         plenaryMiss: 2,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 2
      }
   },
   74352: {
      voting: 85,
      gender: false,
      legislature: {
         legislatures: [
            52,
            53,
            54,
            55,
            56
         ],
         length: 5
      },
      speech: 0,
      expenses: {
         parliamentaryQuotaExpense: 892710.43,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2653430.35,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 208,
         commissionJustified: 2,
         commissionMiss: 179,
         plenaryPresence: 182,
         plenaryJustified: 19,
         plenaryMiss: 14,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 21
      }
   },
   74356: {
      voting: 89,
      gender: false,
      legislature: {
         legislatures: [
            52,
            53,
            54,
            55,
            56
         ],
         length: 5
      },
      speech: 30,
      expenses: {
         parliamentaryQuotaExpense: 1039379.52,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2652846.86,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 172,
         commissionJustified: 12,
         commissionMiss: 140,
         plenaryPresence: 185,
         plenaryJustified: 18,
         plenaryMiss: 12,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 15
      }
   },
   74366: {
      voting: 90,
      gender: false,
      legislature: {
         legislatures: [
            52,
            53,
            54,
            55,
            56
         ],
         length: 5
      },
      speech: 39,
      expenses: {
         parliamentaryQuotaExpense: 772037.65,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2622806.37,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 387,
         commissionJustified: 35,
         commissionMiss: 99,
         plenaryPresence: 185,
         plenaryJustified: 24,
         plenaryMiss: 6,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 9
      }
   },
   74371: {
      voting: 20,
      gender: false,
      legislature: {
         legislatures: [
            52,
            53,
            54,
            55,
            56
         ],
         length: 5
      },
      speech: 21,
      expenses: {
         parliamentaryQuotaExpense: 808640.5,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2678125.99,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 374,
         commissionJustified: 1,
         commissionMiss: 141,
         plenaryPresence: 207,
         plenaryJustified: 1,
         plenaryMiss: 7,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 10
      }
   },
   74376: {
      voting: 23,
      gender: false,
      legislature: {
         legislatures: [
            52,
            53,
            54,
            55,
            56
         ],
         length: 5
      },
      speech: 1,
      expenses: {
         parliamentaryQuotaExpense: 860475.42,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2668546.41,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 123,
         commissionJustified: 3,
         commissionMiss: 58,
         plenaryPresence: 203,
         plenaryJustified: 8,
         plenaryMiss: 4,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 6
      }
   },
   74383: {
      voting: 93,
      gender: false,
      legislature: {
         legislatures: [
            52,
            53,
            54,
            55,
            56
         ],
         length: 5
      },
      speech: 0,
      expenses: {
         parliamentaryQuotaExpense: 915456.14,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2660198.9,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 16,
         commissionJustified: 18,
         commissionMiss: 129,
         plenaryPresence: 165,
         plenaryJustified: 49,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 3
      }
   },
   74398: {
      voting: 21,
      gender: true,
      legislature: {
         legislatures: [
            52,
            53,
            54,
            55,
            56
         ],
         length: 5
      },
      speech: 219,
      expenses: {
         parliamentaryQuotaExpense: 797702.49,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2651128.71,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 334,
         commissionJustified: 52,
         commissionMiss: 207,
         plenaryPresence: 200,
         plenaryJustified: 14,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 6
      }
   },
   74400: {
      voting: 21,
      gender: false,
      legislature: {
         legislatures: [
            52,
            53,
            54,
            55,
            56
         ],
         length: 5
      },
      speech: 92,
      expenses: {
         parliamentaryQuotaExpense: 952512.85,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2630405.01,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 102,
         commissionJustified: 3,
         commissionMiss: 91,
         plenaryPresence: 195,
         plenaryJustified: 19,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 1
      }
   },
   74419: {
      voting: 31,
      gender: false,
      legislature: {
         legislatures: [
            52,
            53,
            54,
            55,
            56
         ],
         length: 5
      },
      speech: 88,
      expenses: {
         parliamentaryQuotaExpense: 991226.29,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2675771.74,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 174,
         commissionJustified: 15,
         commissionMiss: 108,
         plenaryPresence: 192,
         plenaryJustified: 20,
         plenaryMiss: 3,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 5
      }
   },
   74439: {
      voting: 32,
      gender: false,
      legislature: {
         legislatures: [
            53,
            54,
            55,
            56
         ],
         length: 4
      },
      speech: 170,
      expenses: {
         parliamentaryQuotaExpense: 809417.79,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2658529.08,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 58,
         commissionJustified: 1,
         commissionMiss: 87,
         plenaryPresence: 206,
         plenaryJustified: 2,
         plenaryMiss: 7,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 10
      }
   },
   74459: {
      voting: 92,
      gender: false,
      legislature: {
         legislatures: [
            52,
            53,
            54,
            55,
            56
         ],
         length: 5
      },
      speech: 29,
      expenses: {
         parliamentaryQuotaExpense: 769218.09,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2643909.26,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 334,
         commissionJustified: 1,
         commissionMiss: 126,
         plenaryPresence: 206,
         plenaryJustified: 5,
         plenaryMiss: 4,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 4
      }
   },
   74467: {
      voting: 37,
      gender: false,
      legislature: {
         legislatures: [
            52,
            53,
            54,
            55,
            56
         ],
         length: 5
      },
      speech: 20,
      expenses: {
         parliamentaryQuotaExpense: 856518.19,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2381877.83,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 20,
         commissionJustified: 6,
         commissionMiss: 44,
         plenaryPresence: 205,
         plenaryJustified: 7,
         plenaryMiss: 3,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 4
      }
   },
   74471: {
      voting: 91,
      gender: false,
      legislature: {
         legislatures: [
            52,
            53,
            54,
            55,
            56
         ],
         length: 5
      },
      speech: 19,
      expenses: {
         parliamentaryQuotaExpense: 685743.85,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2650943.36,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 28,
         commissionJustified: 5,
         commissionMiss: 62,
         plenaryPresence: 207,
         plenaryJustified: 7,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 2
      }
   },
   74478: {
      voting: 84,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 0,
      expenses: {
         parliamentaryQuotaExpense: 393282.42,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 975016.96,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 0,
         commissionJustified: 0,
         commissionMiss: 0,
         plenaryPresence: 160,
         plenaryJustified: 55,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 0
      }
   },
   74537: {
      voting: 95,
      gender: false,
      legislature: {
         legislatures: [
            52,
            53,
            54,
            55,
            56
         ],
         length: 5
      },
      speech: 58,
      expenses: {
         parliamentaryQuotaExpense: 834506.78,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2665064.17,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 232,
         commissionJustified: 13,
         commissionMiss: 5,
         plenaryPresence: 192,
         plenaryJustified: 22,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 2
      }
   },
   74554: {
      voting: 95,
      gender: false,
      legislature: {
         legislatures: [
            52,
            53,
            54,
            55,
            56
         ],
         length: 5
      },
      speech: 49,
      expenses: {
         parliamentaryQuotaExpense: 888812.52,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2601166.76,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 267,
         commissionJustified: 21,
         commissionMiss: 117,
         plenaryPresence: 184,
         plenaryJustified: 26,
         plenaryMiss: 5,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 12
      }
   },
   74574: {
      voting: 87,
      gender: false,
      legislature: {
         legislatures: [
            52,
            53,
            54,
            55,
            56
         ],
         length: 5
      },
      speech: 8,
      expenses: {
         parliamentaryQuotaExpense: 543035.94,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2261859.45,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 256,
         commissionJustified: 0,
         commissionMiss: 36,
         plenaryPresence: 175,
         plenaryJustified: 5,
         plenaryMiss: 0,
         ordemOfDayPresence: 241,
         ordemOfDayMiss: 2
      }
   },
   74585: {
      voting: 88,
      gender: false,
      legislature: {
         legislatures: [
            52,
            53,
            54,
            55,
            56
         ],
         length: 5
      },
      speech: 65,
      expenses: {
         parliamentaryQuotaExpense: 746606.51,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2666304.38,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 770,
         commissionJustified: 7,
         commissionMiss: 6,
         plenaryPresence: 215,
         plenaryJustified: 0,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 0
      }
   },
   74646: {
      voting: 86,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 20,
      expenses: {
         parliamentaryQuotaExpense: 633393.79,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2489317.22,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 87,
         commissionJustified: 16,
         commissionMiss: 35,
         plenaryPresence: 185,
         plenaryJustified: 30,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 1
      }
   },
   74655: {
      voting: 82,
      gender: false,
      legislature: {
         legislatures: [
            52,
            53,
            54,
            55,
            56
         ],
         length: 5
      },
      speech: 6,
      expenses: {
         parliamentaryQuotaExpense: 477633.94,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2625809.53,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 697,
         commissionJustified: 24,
         commissionMiss: 129,
         plenaryPresence: 207,
         plenaryJustified: 8,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 0
      }
   },
   74749: {
      voting: 87,
      gender: false,
      legislature: {
         legislatures: [
            52,
            53,
            54,
            55,
            56
         ],
         length: 5
      },
      speech: 2,
      expenses: {
         parliamentaryQuotaExpense: 667395.3,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2627049.21,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 262,
         commissionJustified: 20,
         commissionMiss: 137,
         plenaryPresence: 195,
         plenaryJustified: 9,
         plenaryMiss: 11,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 20
      }
   },
   74784: {
      voting: 20,
      gender: true,
      legislature: {
         legislatures: [
            52,
            53,
            54,
            55,
            56
         ],
         length: 5
      },
      speech: 72,
      expenses: {
         parliamentaryQuotaExpense: 550342.91,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2468948.91,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 302,
         commissionJustified: 38,
         commissionMiss: 102,
         plenaryPresence: 188,
         plenaryJustified: 27,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 2
      }
   },
   74848: {
      voting: 27,
      gender: true,
      legislature: {
         legislatures: [
            52,
            54,
            55,
            56
         ],
         length: 4
      },
      speech: 449,
      expenses: {
         parliamentaryQuotaExpense: 633085.45,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2646149.45,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 283,
         commissionJustified: 40,
         commissionMiss: 227,
         plenaryPresence: 197,
         plenaryJustified: 18,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 1
      }
   },
   75431: {
      voting: 91,
      gender: false,
      legislature: {
         legislatures: [
            54,
            56
         ],
         length: 2
      },
      speech: 29,
      expenses: {
         parliamentaryQuotaExpense: 692317.77,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2480375.19,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 194,
         commissionJustified: 33,
         commissionMiss: 162,
         plenaryPresence: 195,
         plenaryJustified: 20,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 3
      }
   },
   76874: {
      voting: 16,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 172,
      expenses: {
         parliamentaryQuotaExpense: 727956.39,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2520315.58,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 233,
         commissionJustified: 7,
         commissionMiss: 202,
         plenaryPresence: 209,
         plenaryJustified: 3,
         plenaryMiss: 3,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 2
      }
   },
   81297: {
      voting: 95,
      gender: true,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 249,
      expenses: {
         parliamentaryQuotaExpense: 861290.13,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2521889.01,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 648,
         commissionJustified: 0,
         commissionMiss: 173,
         plenaryPresence: 214,
         plenaryJustified: 1,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 1
      }
   },
   90201: {
      voting: 84,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 17,
      expenses: {
         parliamentaryQuotaExpense: 876303.8,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2244919.91,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 525,
         commissionJustified: 19,
         commissionMiss: 205,
         plenaryPresence: 204,
         plenaryJustified: 9,
         plenaryMiss: 2,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 7
      }
   },
   92102: {
      voting: 90,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 27,
      expenses: {
         parliamentaryQuotaExpense: 852964.08,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2474635.36,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 428,
         commissionJustified: 10,
         commissionMiss: 123,
         plenaryPresence: 205,
         plenaryJustified: 6,
         plenaryMiss: 4,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 5
      }
   },
   92172: {
      voting: 0,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 0,
      expenses: {
         parliamentaryQuotaExpense: 0,
         parliamentaryQuotaPeriod: 0,
         cabinetExpense: 0,
         cabinetPeriod: 3
      },
      presences: {
         commissionPresence: 133,
         commissionJustified: 26,
         commissionMiss: 55,
         plenaryPresence: 0,
         plenaryJustified: 0,
         plenaryMiss: 0,
         ordemOfDayPresence: 0,
         ordemOfDayMiss: 0
      }
   },
   92346: {
      voting: 95,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 49,
      expenses: {
         parliamentaryQuotaExpense: 670540.44,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2452000.16,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 347,
         commissionJustified: 20,
         commissionMiss: 36,
         plenaryPresence: 184,
         plenaryJustified: 25,
         plenaryMiss: 6,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 8
      }
   },
   92699: {
      voting: 87,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 10,
      expenses: {
         parliamentaryQuotaExpense: 806230.41,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2603703.58,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 250,
         commissionJustified: 9,
         commissionMiss: 67,
         plenaryPresence: 195,
         plenaryJustified: 13,
         plenaryMiss: 7,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 8
      }
   },
   92776: {
      voting: 92,
      gender: false,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 44,
      expenses: {
         parliamentaryQuotaExpense: 759822.86,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2675255.65,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 100,
         commissionJustified: 11,
         commissionMiss: 107,
         plenaryPresence: 198,
         plenaryJustified: 11,
         plenaryMiss: 6,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 15
      }
   },
   93083: {
      voting: 91,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 65,
      expenses: {
         parliamentaryQuotaExpense: 838408.2,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2646020.34,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 153,
         commissionJustified: 6,
         commissionMiss: 60,
         plenaryPresence: 203,
         plenaryJustified: 1,
         plenaryMiss: 11,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 16
      }
   },
   98057: {
      voting: 89,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 98,
      expenses: {
         parliamentaryQuotaExpense: 848753.98,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2515603.54,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 372,
         commissionJustified: 20,
         commissionMiss: 73,
         plenaryPresence: 203,
         plenaryJustified: 10,
         plenaryMiss: 2,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 6
      }
   },
   107283: {
      voting: 20,
      gender: true,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 85,
      expenses: {
         parliamentaryQuotaExpense: 900656.37,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2496407.5,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 188,
         commissionJustified: 31,
         commissionMiss: 92,
         plenaryPresence: 180,
         plenaryJustified: 35,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 0
      }
   },
   108338: {
      voting: 90,
      gender: true,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 24,
      expenses: {
         parliamentaryQuotaExpense: 808391.66,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2422005.7,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 390,
         commissionJustified: 13,
         commissionMiss: 50,
         plenaryPresence: 198,
         plenaryJustified: 16,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 2
      }
   },
   109429: {
      voting: 89,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 25,
      expenses: {
         parliamentaryQuotaExpense: 681564.18,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 1985229.13,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 301,
         commissionJustified: 8,
         commissionMiss: 22,
         plenaryPresence: 206,
         plenaryJustified: 6,
         plenaryMiss: 3,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 3
      }
   },
   112437: {
      voting: 89,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 9,
      expenses: {
         parliamentaryQuotaExpense: 1039606.47,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2649332.4,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 175,
         commissionJustified: 31,
         commissionMiss: 157,
         plenaryPresence: 193,
         plenaryJustified: 21,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 8
      }
   },
   115746: {
      voting: 92,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 17,
      expenses: {
         parliamentaryQuotaExpense: 807432.58,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2450428.13,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 168,
         commissionJustified: 1,
         commissionMiss: 45,
         plenaryPresence: 203,
         plenaryJustified: 9,
         plenaryMiss: 3,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 2
      }
   },
   116379: {
      voting: 93,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 170,
      expenses: {
         parliamentaryQuotaExpense: 572424.63,
         parliamentaryQuotaPeriod: 21,
         cabinetExpense: 2535257.66,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 535,
         commissionJustified: 3,
         commissionMiss: 100,
         plenaryPresence: 190,
         plenaryJustified: 2,
         plenaryMiss: 1,
         ordemOfDayPresence: 255,
         ordemOfDayMiss: 3
      }
   },
   121948: {
      voting: 93,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 4,
      expenses: {
         parliamentaryQuotaExpense: 732625.7,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2545834.32,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 238,
         commissionJustified: 0,
         commissionMiss: 30,
         plenaryPresence: 213,
         plenaryJustified: 2,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 0
      }
   },
   122974: {
      voting: 90,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 31,
      expenses: {
         parliamentaryQuotaExpense: 966770.3,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2555146.74,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 314,
         commissionJustified: 10,
         commissionMiss: 55,
         plenaryPresence: 196,
         plenaryJustified: 19,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 0
      }
   },
   132504: {
      voting: 21,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 149,
      expenses: {
         parliamentaryQuotaExpense: 893601.08,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2669224.01,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 186,
         commissionJustified: 16,
         commissionMiss: 37,
         plenaryPresence: 197,
         plenaryJustified: 18,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 1
      }
   },
   133439: {
      voting: 35,
      gender: false,
      legislature: {
         legislatures: [
            52,
            54,
            55,
            56
         ],
         length: 4
      },
      speech: 181,
      expenses: {
         parliamentaryQuotaExpense: 1001135.13,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2477776.99,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 363,
         commissionJustified: 7,
         commissionMiss: 108,
         plenaryPresence: 209,
         plenaryJustified: 6,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 0
      }
   },
   133810: {
      voting: 89,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 2,
      expenses: {
         parliamentaryQuotaExpense: 399797.1,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2461891.19,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 156,
         commissionJustified: 9,
         commissionMiss: 179,
         plenaryPresence: 209,
         plenaryJustified: 6,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 2
      }
   },
   133968: {
      voting: 34,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 86,
      expenses: {
         parliamentaryQuotaExpense: 703331.16,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2510329.21,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 483,
         commissionJustified: 36,
         commissionMiss: 114,
         plenaryPresence: 192,
         plenaryJustified: 21,
         plenaryMiss: 2,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 2
      }
   },
   135054: {
      voting: 91,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 1,
      expenses: {
         parliamentaryQuotaExpense: 919843.35,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2171662.53,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 151,
         commissionJustified: 0,
         commissionMiss: 0,
         plenaryPresence: 209,
         plenaryJustified: 6,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 4
      }
   },
   136811: {
      voting: 92,
      gender: false,
      legislature: {
         legislatures: [
            52,
            53,
            54,
            55,
            56
         ],
         length: 5
      },
      speech: 70,
      expenses: {
         parliamentaryQuotaExpense: 724774.58,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2664286.7,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 215,
         commissionJustified: 37,
         commissionMiss: 133,
         plenaryPresence: 209,
         plenaryJustified: 6,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 4
      }
   },
   137070: {
      voting: 92,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 78,
      expenses: {
         parliamentaryQuotaExpense: 980886.8,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2612656.71,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 217,
         commissionJustified: 6,
         commissionMiss: 51,
         plenaryPresence: 187,
         plenaryJustified: 13,
         plenaryMiss: 15,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 17
      }
   },
   139285: {
      voting: 28,
      gender: true,
      legislature: {
         legislatures: [
            53,
            56
         ],
         length: 2
      },
      speech: 97,
      expenses: {
         parliamentaryQuotaExpense: 767897.44,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2453006.82,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 355,
         commissionJustified: 9,
         commissionMiss: 78,
         plenaryPresence: 197,
         plenaryJustified: 12,
         plenaryMiss: 6,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 8
      }
   },
   141335: {
      voting: 21,
      gender: false,
      legislature: {
         legislatures: [
            52,
            53,
            54,
            55,
            56
         ],
         length: 5
      },
      speech: 58,
      expenses: {
         parliamentaryQuotaExpense: 1016800.29,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2652196.4,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 54,
         commissionJustified: 2,
         commissionMiss: 118,
         plenaryPresence: 202,
         plenaryJustified: 7,
         plenaryMiss: 6,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 9
      }
   },
   141372: {
      voting: 0,
      gender: false,
      legislature: {
         legislatures: [
            53,
            54,
            55,
            56
         ],
         length: 4
      },
      speech: 0,
      expenses: {
         parliamentaryQuotaExpense: 29050.56,
         parliamentaryQuotaPeriod: 1,
         cabinetExpense: 111611.14,
         cabinetPeriod: 4
      },
      presences: {
         commissionPresence: 137,
         commissionJustified: 40,
         commissionMiss: 54,
         plenaryPresence: 0,
         plenaryJustified: 0,
         plenaryMiss: 0,
         ordemOfDayPresence: 0,
         ordemOfDayMiss: 0
      }
   },
   141391: {
      voting: 79,
      gender: false,
      legislature: {
         legislatures: [
            53,
            54,
            55,
            56
         ],
         length: 4
      },
      speech: 403,
      expenses: {
         parliamentaryQuotaExpense: 708403.92,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2503028.86,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 195,
         commissionJustified: 11,
         commissionMiss: 93,
         plenaryPresence: 195,
         plenaryJustified: 14,
         plenaryMiss: 6,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 7
      }
   },
   141398: {
      voting: 23,
      gender: false,
      legislature: {
         legislatures: [
            53,
            54,
            55,
            56
         ],
         length: 4
      },
      speech: 174,
      expenses: {
         parliamentaryQuotaExpense: 806411.57,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2638243.56,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 169,
         commissionJustified: 10,
         commissionMiss: 176,
         plenaryPresence: 198,
         plenaryJustified: 17,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 0
      }
   },
   141401: {
      voting: 83,
      gender: false,
      legislature: {
         legislatures: [
            53,
            54,
            55,
            56
         ],
         length: 4
      },
      speech: 7,
      expenses: {
         parliamentaryQuotaExpense: 771175.89,
         parliamentaryQuotaPeriod: 21,
         cabinetExpense: 2675553.43,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 6,
         commissionJustified: 2,
         commissionMiss: 24,
         plenaryPresence: 137,
         plenaryJustified: 31,
         plenaryMiss: 3,
         ordemOfDayPresence: 239,
         ordemOfDayMiss: 7
      }
   },
   141405: {
      voting: 89,
      gender: false,
      legislature: {
         legislatures: [
            53,
            54,
            55,
            56
         ],
         length: 4
      },
      speech: 121,
      expenses: {
         parliamentaryQuotaExpense: 692315.27,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2476983.22,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 351,
         commissionJustified: 14,
         commissionMiss: 52,
         plenaryPresence: 206,
         plenaryJustified: 7,
         plenaryMiss: 2,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 3
      }
   },
   141408: {
      voting: 90,
      gender: false,
      legislature: {
         legislatures: [
            53,
            54,
            55,
            56
         ],
         length: 4
      },
      speech: 17,
      expenses: {
         parliamentaryQuotaExpense: 839885.85,
         parliamentaryQuotaPeriod: 21,
         cabinetExpense: 2661029.32,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 140,
         commissionJustified: 12,
         commissionMiss: 83,
         plenaryPresence: 172,
         plenaryJustified: 15,
         plenaryMiss: 0,
         ordemOfDayPresence: 250,
         ordemOfDayMiss: 2
      }
   },
   141411: {
      voting: 36,
      gender: false,
      legislature: {
         legislatures: [
            53,
            55,
            56
         ],
         length: 3
      },
      speech: 11,
      expenses: {
         parliamentaryQuotaExpense: 951113.83,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2642745.21,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 290,
         commissionJustified: 3,
         commissionMiss: 20,
         plenaryPresence: 203,
         plenaryJustified: 11,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 3
      }
   },
   141417: {
      voting: 91,
      gender: false,
      legislature: {
         legislatures: [
            53,
            54,
            55,
            56
         ],
         length: 4
      },
      speech: 13,
      expenses: {
         parliamentaryQuotaExpense: 886331.13,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2666374.37,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 195,
         commissionJustified: 8,
         commissionMiss: 41,
         plenaryPresence: 186,
         plenaryJustified: 15,
         plenaryMiss: 14,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 19
      }
   },
   141421: {
      voting: 86,
      gender: false,
      legislature: {
         legislatures: [
            53,
            54,
            55,
            56
         ],
         length: 4
      },
      speech: 2,
      expenses: {
         parliamentaryQuotaExpense: 722769.58,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2514876.93,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 47,
         commissionJustified: 19,
         commissionMiss: 234,
         plenaryPresence: 195,
         plenaryJustified: 8,
         plenaryMiss: 12,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 23
      }
   },
   141422: {
      voting: 88,
      gender: false,
      legislature: {
         legislatures: [
            53,
            54,
            55,
            56
         ],
         length: 4
      },
      speech: 59,
      expenses: {
         parliamentaryQuotaExpense: 1000015.45,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2677132.01,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 59,
         commissionJustified: 36,
         commissionMiss: 113,
         plenaryPresence: 197,
         plenaryJustified: 17,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 6
      }
   },
   141427: {
      voting: 86,
      gender: false,
      legislature: {
         legislatures: [
            53,
            54,
            55,
            56
         ],
         length: 4
      },
      speech: 25,
      expenses: {
         parliamentaryQuotaExpense: 622383.34,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2452530.7,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 90,
         commissionJustified: 10,
         commissionMiss: 159,
         plenaryPresence: 203,
         plenaryJustified: 10,
         plenaryMiss: 2,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 10
      }
   },
   141431: {
      voting: 89,
      gender: false,
      legislature: {
         legislatures: [
            53,
            54,
            55,
            56
         ],
         length: 4
      },
      speech: 1,
      expenses: {
         parliamentaryQuotaExpense: 783501.08,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2368067.65,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 74,
         commissionJustified: 5,
         commissionMiss: 135,
         plenaryPresence: 199,
         plenaryJustified: 7,
         plenaryMiss: 9,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 13
      }
   },
   141434: {
      voting: 88,
      gender: false,
      legislature: {
         legislatures: [
            53,
            54,
            55,
            56
         ],
         length: 4
      },
      speech: 4,
      expenses: {
         parliamentaryQuotaExpense: 1025631.91,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2674444.26,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 50,
         commissionJustified: 11,
         commissionMiss: 46,
         plenaryPresence: 187,
         plenaryJustified: 21,
         plenaryMiss: 7,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 10
      }
   },
   141439: {
      voting: 32,
      gender: false,
      legislature: {
         legislatures: [
            53,
            54,
            55,
            56
         ],
         length: 4
      },
      speech: 41,
      expenses: {
         parliamentaryQuotaExpense: 714046.76,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2634170.85,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 255,
         commissionJustified: 13,
         commissionMiss: 225,
         plenaryPresence: 192,
         plenaryJustified: 19,
         plenaryMiss: 4,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 4
      }
   },
   141450: {
      voting: 90,
      gender: false,
      legislature: {
         legislatures: [
            53,
            54,
            55,
            56
         ],
         length: 4
      },
      speech: 49,
      expenses: {
         parliamentaryQuotaExpense: 708867.83,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2189509.16,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 558,
         commissionJustified: 17,
         commissionMiss: 99,
         plenaryPresence: 203,
         plenaryJustified: 9,
         plenaryMiss: 3,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 5
      }
   },
   141458: {
      voting: 93,
      gender: false,
      legislature: {
         legislatures: [
            53,
            54,
            55,
            56
         ],
         length: 4
      },
      speech: 5,
      expenses: {
         parliamentaryQuotaExpense: 928897.84,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2641584.25,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 185,
         commissionJustified: 20,
         commissionMiss: 86,
         plenaryPresence: 186,
         plenaryJustified: 22,
         plenaryMiss: 7,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 19
      }
   },
   141459: {
      voting: 92,
      gender: false,
      legislature: {
         legislatures: [
            53,
            54,
            56
         ],
         length: 3
      },
      speech: 4,
      expenses: {
         parliamentaryQuotaExpense: 1003100.62,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2416631.76,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 233,
         commissionJustified: 0,
         commissionMiss: 32,
         plenaryPresence: 212,
         plenaryJustified: 2,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 8
      }
   },
   141464: {
      voting: 22,
      gender: false,
      legislature: {
         legislatures: [
            53,
            54,
            55,
            56
         ],
         length: 4
      },
      speech: 56,
      expenses: {
         parliamentaryQuotaExpense: 1016940.45,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2659953.84,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 12,
         commissionJustified: 14,
         commissionMiss: 98,
         plenaryPresence: 179,
         plenaryJustified: 34,
         plenaryMiss: 2,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 7
      }
   },
   141470: {
      voting: 24,
      gender: false,
      legislature: {
         legislatures: [
            53,
            54,
            55,
            56
         ],
         length: 4
      },
      speech: 222,
      expenses: {
         parliamentaryQuotaExpense: 1042675.99,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2667664.69,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 341,
         commissionJustified: 15,
         commissionMiss: 57,
         plenaryPresence: 206,
         plenaryJustified: 9,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 0
      }
   },
   141478: {
      voting: 0,
      gender: false,
      legislature: {
         legislatures: [
            53,
            55,
            56
         ],
         length: 3
      },
      speech: 0,
      expenses: {
         parliamentaryQuotaExpense: 31416.75,
         parliamentaryQuotaPeriod: 1,
         cabinetExpense: 109754.12,
         cabinetPeriod: 1
      },
      presences: {
         commissionPresence: 0,
         commissionJustified: 0,
         commissionMiss: 0,
         plenaryPresence: 0,
         plenaryJustified: 0,
         plenaryMiss: 0,
         ordemOfDayPresence: 0,
         ordemOfDayMiss: 0
      }
   },
   141488: {
      voting: 21,
      gender: false,
      legislature: {
         legislatures: [
            53,
            54,
            55,
            56
         ],
         length: 4
      },
      speech: 76,
      expenses: {
         parliamentaryQuotaExpense: 891945.98,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2668665.23,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 561,
         commissionJustified: 19,
         commissionMiss: 155,
         plenaryPresence: 206,
         plenaryJustified: 7,
         plenaryMiss: 2,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 9
      }
   },
   141508: {
      voting: 37,
      gender: false,
      legislature: {
         legislatures: [
            53,
            54,
            56
         ],
         length: 3
      },
      speech: 48,
      expenses: {
         parliamentaryQuotaExpense: 283428.72,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2371149.28,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 256,
         commissionJustified: 1,
         commissionMiss: 83,
         plenaryPresence: 213,
         plenaryJustified: 2,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 2
      }
   },
   141513: {
      voting: 88,
      gender: false,
      legislature: {
         legislatures: [
            53,
            54,
            55,
            56
         ],
         length: 4
      },
      speech: 13,
      expenses: {
         parliamentaryQuotaExpense: 536568.37,
         parliamentaryQuotaPeriod: 18,
         cabinetExpense: 1852051.81,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 394,
         commissionJustified: 7,
         commissionMiss: 19,
         plenaryPresence: 146,
         plenaryJustified: 10,
         plenaryMiss: 0,
         ordemOfDayPresence: 204,
         ordemOfDayMiss: 2
      }
   },
   141515: {
      voting: 0,
      gender: false,
      legislature: {
         legislatures: [
            53,
            54,
            55,
            56
         ],
         length: 4
      },
   },
   141516: {
      voting: 87,
      gender: false,
      legislature: {
         legislatures: [
            53,
            54,
            55,
            56
         ],
         length: 4
      },
      speech: 8,
      expenses: {
         parliamentaryQuotaExpense: 851826.24,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2596377.76,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 130,
         commissionJustified: 9,
         commissionMiss: 172,
         plenaryPresence: 194,
         plenaryJustified: 11,
         plenaryMiss: 10,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 17
      }
   },
   141518: {
      voting: 72,
      gender: false,
      legislature: {
         legislatures: [
            53,
            54,
            55,
            56
         ],
         length: 4
      },
      speech: 21,
      expenses: {
         parliamentaryQuotaExpense: 471086.71,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2640216.58,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 48,
         commissionJustified: 26,
         commissionMiss: 133,
         plenaryPresence: 177,
         plenaryJustified: 38,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 0
      }
   },
   141523: {
      voting: 86,
      gender: false,
      legislature: {
         legislatures: [
            53,
            54,
            56
         ],
         length: 3
      },
      speech: 9,
      expenses: {
         parliamentaryQuotaExpense: 639608.3,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2535448.35,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 194,
         commissionJustified: 11,
         commissionMiss: 131,
         plenaryPresence: 206,
         plenaryJustified: 9,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 2
      }
   },
   141531: {
      voting: 82,
      gender: false,
      legislature: {
         legislatures: [
            53,
            54,
            55,
            56
         ],
         length: 4
      },
      speech: 63,
      expenses: {
         parliamentaryQuotaExpense: 828911.5,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2557452.56,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 106,
         commissionJustified: 6,
         commissionMiss: 42,
         plenaryPresence: 203,
         plenaryJustified: 7,
         plenaryMiss: 5,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 5
      }
   },
   141553: {
      voting: 83,
      gender: false,
      legislature: {
         legislatures: [
            53,
            54,
            55,
            56
         ],
         length: 4
      },
      speech: 26,
      expenses: {
         parliamentaryQuotaExpense: 806591.33,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2550517.58,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 265,
         commissionJustified: 4,
         commissionMiss: 44,
         plenaryPresence: 202,
         plenaryJustified: 12,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 1
      }
   },
   141555: {
      voting: 89,
      gender: false,
      legislature: {
         legislatures: [
            53,
            55,
            56
         ],
         length: 3
      },
      speech: 164,
      expenses: {
         parliamentaryQuotaExpense: 931174.63,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2497199.36,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 339,
         commissionJustified: 11,
         commissionMiss: 61,
         plenaryPresence: 192,
         plenaryJustified: 20,
         plenaryMiss: 3,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 6
      }
   },
   143084: {
      voting: 85,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 134,
      expenses: {
         parliamentaryQuotaExpense: 952113.71,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2463666.02,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 292,
         commissionJustified: 8,
         commissionMiss: 122,
         plenaryPresence: 207,
         plenaryJustified: 6,
         plenaryMiss: 2,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 2
      }
   },
   143632: {
      voting: 92,
      gender: false,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 31,
      expenses: {
         parliamentaryQuotaExpense: 783766,
         parliamentaryQuotaPeriod: 21,
         cabinetExpense: 2656442.13,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 139,
         commissionJustified: 18,
         commissionMiss: 22,
         plenaryPresence: 161,
         plenaryJustified: 29,
         plenaryMiss: 3,
         ordemOfDayPresence: 259,
         ordemOfDayMiss: 17
      }
   },
   146307: {
      voting: 92,
      gender: false,
      legislature: {
         legislatures: [
            53,
            54,
            56
         ],
         length: 3
      },
      speech: 1,
      expenses: {
         parliamentaryQuotaExpense: 809776.7,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2458035.63,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 217,
         commissionJustified: 7,
         commissionMiss: 63,
         plenaryPresence: 204,
         plenaryJustified: 6,
         plenaryMiss: 5,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 6
      }
   },
   146788: {
      voting: 90,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 11,
      expenses: {
         parliamentaryQuotaExpense: 742915.57,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2498516.75,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 196,
         commissionJustified: 8,
         commissionMiss: 169,
         plenaryPresence: 189,
         plenaryJustified: 8,
         plenaryMiss: 18,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 25
      }
   },
   150418: {
      voting: 89,
      gender: false,
      legislature: {
         legislatures: [
            53,
            54,
            55,
            56
         ],
         length: 4
      },
      speech: 11,
      expenses: {
         parliamentaryQuotaExpense: 860691.95,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2659550.4,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 243,
         commissionJustified: 20,
         commissionMiss: 105,
         plenaryPresence: 198,
         plenaryJustified: 13,
         plenaryMiss: 4,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 9
      }
   },
   151208: {
      voting: 91,
      gender: false,
      legislature: {
         legislatures: [
            53,
            54,
            55,
            56
         ],
         length: 4
      },
      speech: 13,
      expenses: {
         parliamentaryQuotaExpense: 751912.17,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2555516.59,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 177,
         commissionJustified: 21,
         commissionMiss: 100,
         plenaryPresence: 185,
         plenaryJustified: 13,
         plenaryMiss: 17,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 12
      }
   },
   152605: {
      voting: 15,
      gender: false,
      legislature: {
         legislatures: [
            53,
            54,
            55,
            56
         ],
         length: 4
      },
      speech: 305,
      expenses: {
         parliamentaryQuotaExpense: 732246,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2608619.02,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 480,
         commissionJustified: 14,
         commissionMiss: 72,
         plenaryPresence: 210,
         plenaryJustified: 5,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 0
      }
   },
   152610: {
      voting: 91,
      gender: false
   },
   156190: {
      voting: 80,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 433,
      expenses: {
         parliamentaryQuotaExpense: 212503.61,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 1602263.21,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 512,
         commissionJustified: 14,
         commissionMiss: 3,
         plenaryPresence: 202,
         plenaryJustified: 13,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 0
      }
   },
   157130: {
      voting: 30,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 12,
      expenses: {
         parliamentaryQuotaExpense: 793529.26,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2454909.03,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 620,
         commissionJustified: 16,
         commissionMiss: 184,
         plenaryPresence: 202,
         plenaryJustified: 9,
         plenaryMiss: 4,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 7
      }
   },
   160508: {
      voting: 24,
      gender: false,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 257,
      expenses: {
         parliamentaryQuotaExpense: 892475.43,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2666277.04,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 90,
         commissionJustified: 19,
         commissionMiss: 80,
         plenaryPresence: 208,
         plenaryJustified: 2,
         plenaryMiss: 5,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 9
      }
   },
   160510: {
      voting: 92,
      gender: false,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 5,
      expenses: {
         parliamentaryQuotaExpense: 674763.08,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2261571.67,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 57,
         commissionJustified: 40,
         commissionMiss: 19,
         plenaryPresence: 181,
         plenaryJustified: 34,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 0
      }
   },
   160511: {
      voting: 27,
      gender: false,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 355,
      expenses: {
         parliamentaryQuotaExpense: 789083.61,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2547214.91,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 49,
         commissionJustified: 7,
         commissionMiss: 40,
         plenaryPresence: 202,
         plenaryJustified: 13,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 0
      }
   },
   160512: {
      voting: 83,
      gender: false,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 55,
      expenses: {
         parliamentaryQuotaExpense: 812572.71,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2607741.59,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 415,
         commissionJustified: 8,
         commissionMiss: 81,
         plenaryPresence: 197,
         plenaryJustified: 11,
         plenaryMiss: 7,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 14
      }
   },
   160518: {
      voting: 46,
      gender: false,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 31,
      expenses: {
         parliamentaryQuotaExpense: 594829.36,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2630564.08,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 589,
         commissionJustified: 0,
         commissionMiss: 21,
         plenaryPresence: 215,
         plenaryJustified: 0,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 3
      }
   },
   160527: {
      voting: 87,
      gender: false,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 80,
      expenses: {
         parliamentaryQuotaExpense: 917935.75,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2518300.74,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 90,
         commissionJustified: 65,
         commissionMiss: 133,
         plenaryPresence: 171,
         plenaryJustified: 42,
         plenaryMiss: 2,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 2
      }
   },
   160528: {
      voting: 31,
      gender: false,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 16,
      expenses: {
         parliamentaryQuotaExpense: 557857.64,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2629008.34,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 234,
         commissionJustified: 39,
         commissionMiss: 211,
         plenaryPresence: 193,
         plenaryJustified: 17,
         plenaryMiss: 5,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 8
      }
   },
   160531: {
      voting: 88,
      gender: false,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 34,
      expenses: {
         parliamentaryQuotaExpense: 1112684.79,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2669705.49,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 144,
         commissionJustified: 14,
         commissionMiss: 120,
         plenaryPresence: 181,
         plenaryJustified: 32,
         plenaryMiss: 2,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 5
      }
   },
   160532: {
      voting: 87,
      gender: false,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 0,
      expenses: {
         parliamentaryQuotaExpense: 538846.13,
         parliamentaryQuotaPeriod: 21,
         cabinetExpense: 2624539.33,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 304,
         commissionJustified: 0,
         commissionMiss: 50,
         plenaryPresence: 179,
         plenaryJustified: 0,
         plenaryMiss: 7,
         ordemOfDayPresence: 251,
         ordemOfDayMiss: 22
      }
   },
   160534: {
      voting: 91,
      gender: true,
      legislature: {
         legislatures: [
            54,
            56
         ],
         length: 2
      },
      speech: 4,
      expenses: {
         parliamentaryQuotaExpense: 812668.18,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2502920.99,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 573,
         commissionJustified: 2,
         commissionMiss: 29,
         plenaryPresence: 206,
         plenaryJustified: 7,
         plenaryMiss: 2,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 1
      }
   },
   160535: {
      voting: 20,
      gender: false,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 152,
      expenses: {
         parliamentaryQuotaExpense: 800373.1,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2672476.15,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 161,
         commissionJustified: 3,
         commissionMiss: 74,
         plenaryPresence: 194,
         plenaryJustified: 14,
         plenaryMiss: 7,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 10
      }
   },
   160538: {
      voting: 19,
      gender: false,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 249,
      expenses: {
         parliamentaryQuotaExpense: 816690.88,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2672033.94,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 111,
         commissionJustified: 3,
         commissionMiss: 26,
         plenaryPresence: 207,
         plenaryJustified: 7,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 3
      }
   },
   160541: {
      voting: 86,
      gender: false,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 86,
      expenses: {
         parliamentaryQuotaExpense: 932269.36,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2661387.8,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 1,
         commissionJustified: 0,
         commissionMiss: 0,
         plenaryPresence: 146,
         plenaryJustified: 69,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 0
      }
   },
   160545: {
      voting: 88,
      gender: false,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 52,
      expenses: {
         parliamentaryQuotaExpense: 842667.09,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2540950.4,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 435,
         commissionJustified: 8,
         commissionMiss: 156,
         plenaryPresence: 212,
         plenaryJustified: 1,
         plenaryMiss: 2,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 2
      }
   },
   160553: {
      voting: 89,
      gender: false,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 20,
      expenses: {
         parliamentaryQuotaExpense: 971446.71,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2616270.78,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 138,
         commissionJustified: 26,
         commissionMiss: 267,
         plenaryPresence: 206,
         plenaryJustified: 6,
         plenaryMiss: 3,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 6
      }
   },
   160556: {
      voting: 20,
      gender: false,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 110,
      expenses: {
         parliamentaryQuotaExpense: 881299,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2605723.37,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 623,
         commissionJustified: 10,
         commissionMiss: 78,
         plenaryPresence: 204,
         plenaryJustified: 7,
         plenaryMiss: 4,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 6
      }
   },
   160558: {
      voting: 93,
      gender: false,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 2,
      expenses: {
         parliamentaryQuotaExpense: 848894.85,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2674079.38,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 137,
         commissionJustified: 24,
         commissionMiss: 76,
         plenaryPresence: 164,
         plenaryJustified: 43,
         plenaryMiss: 8,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 11
      }
   },
   160559: {
      voting: 90,
      gender: false,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 39,
      expenses: {
         parliamentaryQuotaExpense: 817101.57,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2630676.55,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 284,
         commissionJustified: 27,
         commissionMiss: 36,
         plenaryPresence: 186,
         plenaryJustified: 28,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 4
      }
   },
   160569: {
      voting: 20,
      gender: false,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 55,
      expenses: {
         parliamentaryQuotaExpense: 926260.42,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2671523.98,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 226,
         commissionJustified: 16,
         commissionMiss: 184,
         plenaryPresence: 200,
         plenaryJustified: 13,
         plenaryMiss: 2,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 3
      }
   },
   160570: {
      voting: 90,
      gender: false,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 10,
      expenses: {
         parliamentaryQuotaExpense: 750658.42,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2659932.39,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 170,
         commissionJustified: 21,
         commissionMiss: 72,
         plenaryPresence: 182,
         plenaryJustified: 33,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 3
      }
   },
   160575: {
      voting: 21,
      gender: true,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 790,
      expenses: {
         parliamentaryQuotaExpense: 630627.4,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2674277.08,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 872,
         commissionJustified: 8,
         commissionMiss: 23,
         plenaryPresence: 210,
         plenaryJustified: 4,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 2
      }
   },
   160587: {
      voting: 83,
      gender: false,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 201,
      expenses: {
         parliamentaryQuotaExpense: 387942.16,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2661814.17,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 732,
         commissionJustified: 0,
         commissionMiss: 48,
         plenaryPresence: 211,
         plenaryJustified: 4,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 0
      }
   },
   160588: {
      voting: 92,
      gender: false,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 40,
      expenses: {
         parliamentaryQuotaExpense: 740210.21,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2611678.07,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 76,
         commissionJustified: 11,
         commissionMiss: 100,
         plenaryPresence: 196,
         plenaryJustified: 11,
         plenaryMiss: 8,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 14
      }
   },
   160589: {
      voting: 73,
      gender: true,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 21,
      expenses: {
         parliamentaryQuotaExpense: 463546.69,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2501758.2,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 161,
         commissionJustified: 4,
         commissionMiss: 32,
         plenaryPresence: 198,
         plenaryJustified: 12,
         plenaryMiss: 5,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 16
      }
   },
   160591: {
      voting: 91,
      gender: false,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 2,
      expenses: {
         parliamentaryQuotaExpense: 773926.68,
         parliamentaryQuotaPeriod: 19,
         cabinetExpense: 2664145.84,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 26,
         commissionJustified: 13,
         commissionMiss: 98,
         plenaryPresence: 98,
         plenaryJustified: 35,
         plenaryMiss: 23,
         ordemOfDayPresence: 213,
         ordemOfDayMiss: 44
      }
   },
   160592: {
      voting: 22,
      gender: false,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 83,
      expenses: {
         parliamentaryQuotaExpense: 982753.19,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2638343.1,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 215,
         commissionJustified: 26,
         commissionMiss: 78,
         plenaryPresence: 200,
         plenaryJustified: 12,
         plenaryMiss: 3,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 8
      }
   },
   160598: {
      voting: 37,
      gender: true,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 18,
      expenses: {
         parliamentaryQuotaExpense: 636545.84,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2666429.3,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 811,
         commissionJustified: 16,
         commissionMiss: 18,
         plenaryPresence: 199,
         plenaryJustified: 11,
         plenaryMiss: 5,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 10
      }
   },
   160599: {
      voting: 92,
      gender: false,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 0,
      expenses: {
         parliamentaryQuotaExpense: 773547.9,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2536731.23,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 117,
         commissionJustified: 1,
         commissionMiss: 21,
         plenaryPresence: 211,
         plenaryJustified: 3,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 7
      }
   },
   160600: {
      voting: 86,
      gender: false,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 29,
      expenses: {
         parliamentaryQuotaExpense: 896517.01,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2615509.37,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 171,
         commissionJustified: 37,
         commissionMiss: 13,
         plenaryPresence: 177,
         plenaryJustified: 24,
         plenaryMiss: 14,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 22
      }
   },
   160601: {
      voting: 95,
      gender: false,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 22,
      expenses: {
         parliamentaryQuotaExpense: 583102.09,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2668604.42,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 576,
         commissionJustified: 8,
         commissionMiss: 19,
         plenaryPresence: 193,
         plenaryJustified: 21,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 3
      }
   },
   160604: {
      voting: 18,
      gender: false,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 136,
      expenses: {
         parliamentaryQuotaExpense: 862273.7,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2582928.18,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 261,
         commissionJustified: 2,
         commissionMiss: 170,
         plenaryPresence: 205,
         plenaryJustified: 5,
         plenaryMiss: 5,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 9
      }
   },
   160610: {
      voting: 21,
      gender: false,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 167,
      expenses: {
         parliamentaryQuotaExpense: 839116.13,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2589532.72,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 105,
         commissionJustified: 1,
         commissionMiss: 86,
         plenaryPresence: 212,
         plenaryJustified: 2,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 2
      }
   },
   160619: {
      voting: 89,
      gender: false,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 16,
      expenses: {
         parliamentaryQuotaExpense: 910498.32,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2668713.75,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 46,
         commissionJustified: 0,
         commissionMiss: 61,
         plenaryPresence: 208,
         plenaryJustified: 7,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 5
      }
   },
   160632: {
      voting: 88,
      gender: false,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 162,
      expenses: {
         parliamentaryQuotaExpense: 744607.8,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2613419.81,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 356,
         commissionJustified: 15,
         commissionMiss: 66,
         plenaryPresence: 202,
         plenaryJustified: 9,
         plenaryMiss: 4,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 4
      }
   },
   160635: {
      voting: 77,
      gender: false,
      legislature: {
         legislatures: [
            54,
            56
         ],
         length: 2
      },
      speech: 15,
      expenses: {
         parliamentaryQuotaExpense: 974063.82,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2515361.53,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 59,
         commissionJustified: 2,
         commissionMiss: 39,
         plenaryPresence: 203,
         plenaryJustified: 10,
         plenaryMiss: 2,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 7
      }
   },
   160639: {
      voting: 81,
      gender: true,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 70,
      expenses: {
         parliamentaryQuotaExpense: 829994.61,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2566703.64,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 520,
         commissionJustified: 7,
         commissionMiss: 90,
         plenaryPresence: 196,
         plenaryJustified: 12,
         plenaryMiss: 7,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 14
      }
   },
   160640: {
      voting: 94,
      gender: false,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 39,
      expenses: {
         parliamentaryQuotaExpense: 737313.44,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2475407.73,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 225,
         commissionJustified: 23,
         commissionMiss: 74,
         plenaryPresence: 192,
         plenaryJustified: 16,
         plenaryMiss: 7,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 6
      }
   },
   160641: {
      voting: 26,
      gender: true,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 19,
      expenses: {
         parliamentaryQuotaExpense: 1018133.1,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2669209.76,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 305,
         commissionJustified: 4,
         commissionMiss: 7,
         plenaryPresence: 206,
         plenaryJustified: 8,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 5
      }
   },
   160642: {
      voting: 95,
      gender: false,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 46,
      expenses: {
         parliamentaryQuotaExpense: 804236.25,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2613851.73,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 994,
         commissionJustified: 33,
         commissionMiss: 140,
         plenaryPresence: 193,
         plenaryJustified: 18,
         plenaryMiss: 4,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 5
      }
   },
   160651: {
      voting: 95,
      gender: false,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 11,
      expenses: {
         parliamentaryQuotaExpense: 598191.11,
         parliamentaryQuotaPeriod: 22,
         cabinetExpense: 2655165.08,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 295,
         commissionJustified: 8,
         commissionMiss: 57,
         plenaryPresence: 189,
         plenaryJustified: 8,
         plenaryMiss: 0,
         ordemOfDayPresence: 259,
         ordemOfDayMiss: 1
      }
   },
   160653: {
      voting: 86,
      gender: false,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 40,
      expenses: {
         parliamentaryQuotaExpense: 827529.1,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2547577.37,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 313,
         commissionJustified: 31,
         commissionMiss: 150,
         plenaryPresence: 198,
         plenaryJustified: 17,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 0
      }
   },
   160655: {
      voting: 80,
      gender: false,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 24,
      expenses: {
         parliamentaryQuotaExpense: 644614.9,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2671083.23,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 356,
         commissionJustified: 15,
         commissionMiss: 120,
         plenaryPresence: 188,
         plenaryJustified: 15,
         plenaryMiss: 12,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 12
      }
   },
   160665: {
      voting: 86,
      gender: false,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 101,
      expenses: {
         parliamentaryQuotaExpense: 938157.16,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2584694.24,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 214,
         commissionJustified: 24,
         commissionMiss: 153,
         plenaryPresence: 195,
         plenaryJustified: 20,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 1
      }
   },
   160666: {
      voting: 44,
      gender: false,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 4,
      expenses: {
         parliamentaryQuotaExpense: 868846.97,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2597619.11,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 435,
         commissionJustified: 5,
         commissionMiss: 35,
         plenaryPresence: 202,
         plenaryJustified: 12,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 6
      }
   },
   160667: {
      voting: 91,
      gender: false,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 1,
      expenses: {
         parliamentaryQuotaExpense: 478127.88,
         parliamentaryQuotaPeriod: 21,
         cabinetExpense: 2661099.86,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 50,
         commissionJustified: 7,
         commissionMiss: 84,
         plenaryPresence: 124,
         plenaryJustified: 11,
         plenaryMiss: 32,
         ordemOfDayPresence: 216,
         ordemOfDayMiss: 39
      }
   },
   160669: {
      voting: 88,
      gender: false,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 1,
      expenses: {
         parliamentaryQuotaExpense: 564903.14,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2514774.53,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 168,
         commissionJustified: 22,
         commissionMiss: 54,
         plenaryPresence: 165,
         plenaryJustified: 24,
         plenaryMiss: 26,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 28
      }
   },
   160673: {
      voting: 92,
      gender: false,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 236,
      expenses: {
         parliamentaryQuotaExpense: 883715.93,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2626008.44,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 331,
         commissionJustified: 6,
         commissionMiss: 50,
         plenaryPresence: 199,
         plenaryJustified: 15,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 2
      }
   },
   160674: {
      voting: 84,
      gender: false,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 31,
      expenses: {
         parliamentaryQuotaExpense: 977673.53,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2672340.36,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 86,
         commissionJustified: 15,
         commissionMiss: 130,
         plenaryPresence: 206,
         plenaryJustified: 3,
         plenaryMiss: 6,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 14
      }
   },
   160758: {
      voting: 87,
      gender: false,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 122,
      expenses: {
         parliamentaryQuotaExpense: 823161.24,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2534911.11,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 286,
         commissionJustified: 13,
         commissionMiss: 65,
         plenaryPresence: 204,
         plenaryJustified: 9,
         plenaryMiss: 2,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 3
      }
   },
   160976: {
      voting: 59,
      gender: false,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 0,
      expenses: {
         parliamentaryQuotaExpense: 323395.76,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2469667.91,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 116,
         commissionJustified: 15,
         commissionMiss: 45,
         plenaryPresence: 189,
         plenaryJustified: 25,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 2
      }
   },
   161550: {
      voting: 79,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 5,
      expenses: {
         parliamentaryQuotaExpense: 771429.65,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2538369.71,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 170,
         commissionJustified: 5,
         commissionMiss: 30,
         plenaryPresence: 205,
         plenaryJustified: 10,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 2
      }
   },
   162332: {
      voting: 93,
      gender: false,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 8,
      expenses: {
         parliamentaryQuotaExpense: 854567.98,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2603777.84,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 179,
         commissionJustified: 20,
         commissionMiss: 52,
         plenaryPresence: 191,
         plenaryJustified: 23,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 6
      }
   },
   164359: {
      voting: 85,
      gender: false,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 17,
      expenses: {
         parliamentaryQuotaExpense: 283926.43,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2541215.6,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 117,
         commissionJustified: 25,
         commissionMiss: 61,
         plenaryPresence: 189,
         plenaryJustified: 26,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 1
      }
   },
   164360: {
      voting: 75,
      gender: true,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 136,
      expenses: {
         parliamentaryQuotaExpense: 455085.21,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2187685.94,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 616,
         commissionJustified: 1,
         commissionMiss: 14,
         plenaryPresence: 213,
         plenaryJustified: 2,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 2
      }
   },
   166402: {
      voting: 92,
      gender: true,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 2,
      expenses: {
         parliamentaryQuotaExpense: 852092.54,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2650056.79,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 410,
         commissionJustified: 4,
         commissionMiss: 118,
         plenaryPresence: 185,
         plenaryJustified: 12,
         plenaryMiss: 18,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 20
      }
   },
   171617: {
      voting: 20,
      gender: false,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 190,
      expenses: {
         parliamentaryQuotaExpense: 728633.58,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2652412.53,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 115,
         commissionJustified: 4,
         commissionMiss: 32,
         plenaryPresence: 207,
         plenaryJustified: 8,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 3
      }
   },
   171623: {
      voting: 87,
      gender: false,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 9,
      expenses: {
         parliamentaryQuotaExpense: 894330.85,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2611487.59,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 196,
         commissionJustified: 32,
         commissionMiss: 101,
         plenaryPresence: 192,
         plenaryJustified: 15,
         plenaryMiss: 8,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 8
      }
   },
   177282: {
      voting: 38,
      gender: false,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 74,
      expenses: {
         parliamentaryQuotaExpense: 806692.55,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2671399.78,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 581,
         commissionJustified: 5,
         commissionMiss: 111,
         plenaryPresence: 210,
         plenaryJustified: 4,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 5
      }
   },
   178825: {
      voting: 25,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 36,
      expenses: {
         parliamentaryQuotaExpense: 84901.41,
         parliamentaryQuotaPeriod: 3,
         cabinetExpense: 188099,
         cabinetPeriod: 4
      },
      presences: {
         commissionPresence: 318,
         commissionJustified: 0,
         commissionMiss: 137,
         plenaryPresence: 14,
         plenaryJustified: 0,
         plenaryMiss: 0,
         ordemOfDayPresence: 26,
         ordemOfDayMiss: 0
      }
   },
   178829: {
      voting: 93,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 61,
      expenses: {
         parliamentaryQuotaExpense: 876658.34,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2667805.41,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 365,
         commissionJustified: 5,
         commissionMiss: 162,
         plenaryPresence: 212,
         plenaryJustified: 2,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 3
      }
   },
   178831: {
      voting: 93,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 1,
      expenses: {
         parliamentaryQuotaExpense: 1000109.09,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2664378.37,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 13,
         commissionJustified: 2,
         commissionMiss: 110,
         plenaryPresence: 204,
         plenaryJustified: 6,
         plenaryMiss: 5,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 8
      }
   },
   178832: {
      voting: 65,
      gender: true,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 66,
      expenses: {
         parliamentaryQuotaExpense: 662724.8,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2551788.83,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 336,
         commissionJustified: 36,
         commissionMiss: 216,
         plenaryPresence: 182,
         plenaryJustified: 31,
         plenaryMiss: 2,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 3
      }
   },
   178835: {
      voting: 41,
      gender: false,
      legislature: {
         legislatures: [
            54,
            55,
            56
         ],
         length: 3
      },
      speech: 139,
      expenses: {
         parliamentaryQuotaExpense: 911913.81,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2613445.35,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 183,
         commissionJustified: 26,
         commissionMiss: 112,
         plenaryPresence: 204,
         plenaryJustified: 10,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 2
      }
   },
   178836: {
      voting: 88,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 42,
      expenses: {
         parliamentaryQuotaExpense: 933184.59,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2647349.23,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 416,
         commissionJustified: 12,
         commissionMiss: 11,
         plenaryPresence: 209,
         plenaryJustified: 6,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 1
      }
   },
   178839: {
      voting: 88,
      gender: true,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 0,
      expenses: {
         parliamentaryQuotaExpense: 1065501.51,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2675950.4,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 230,
         commissionJustified: 23,
         commissionMiss: 47,
         plenaryPresence: 187,
         plenaryJustified: 20,
         plenaryMiss: 8,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 10
      }
   },
   178843: {
      voting: 91,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 28,
      expenses: {
         parliamentaryQuotaExpense: 957525.39,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2641180.22,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 340,
         commissionJustified: 41,
         commissionMiss: 147,
         plenaryPresence: 187,
         plenaryJustified: 20,
         plenaryMiss: 8,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 14
      }
   },
   178844: {
      voting: 0,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 0,
      expenses: {
         parliamentaryQuotaExpense: 151181.49,
         parliamentaryQuotaPeriod: 1,
         cabinetExpense: 106825.08,
         cabinetPeriod: 4
      },
      presences: {
         commissionPresence: 307,
         commissionJustified: 0,
         commissionMiss: 22,
         plenaryPresence: 0,
         plenaryJustified: 0,
         plenaryMiss: 0,
         ordemOfDayPresence: 0,
         ordemOfDayMiss: 0
      }
   },
   178854: {
      voting: 87,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 15,
      expenses: {
         parliamentaryQuotaExpense: 941356.63,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2610443.61,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 29,
         commissionJustified: 19,
         commissionMiss: 79,
         plenaryPresence: 183,
         plenaryJustified: 31,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 6
      }
   },
   178857: {
      voting: 20,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 212,
      expenses: {
         parliamentaryQuotaExpense: 799535.97,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2668333.29,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 547,
         commissionJustified: 62,
         commissionMiss: 47,
         plenaryPresence: 201,
         plenaryJustified: 12,
         plenaryMiss: 2,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 5
      }
   },
   178858: {
      voting: 81,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 7,
      expenses: {
         parliamentaryQuotaExpense: 916225.27,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2677705.97,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 144,
         commissionJustified: 11,
         commissionMiss: 39,
         plenaryPresence: 197,
         plenaryJustified: 18,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 3
      }
   },
   178860: {
      voting: 88,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 18,
      expenses: {
         parliamentaryQuotaExpense: 747661.44,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2619867.41,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 286,
         commissionJustified: 8,
         commissionMiss: 119,
         plenaryPresence: 208,
         plenaryJustified: 5,
         plenaryMiss: 2,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 7
      }
   },
   178861: {
      voting: 93,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 23,
      expenses: {
         parliamentaryQuotaExpense: 921279.25,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2677035.47,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 164,
         commissionJustified: 8,
         commissionMiss: 73,
         plenaryPresence: 195,
         plenaryJustified: 13,
         plenaryMiss: 7,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 11
      }
   },
   178862: {
      voting: 0,
      gender: true,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
   },
   178863: {
      voting: 83,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 9,
      expenses: {
         parliamentaryQuotaExpense: 932712.83,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2637325.7,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 23,
         commissionJustified: 13,
         commissionMiss: 15,
         plenaryPresence: 195,
         plenaryJustified: 18,
         plenaryMiss: 2,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 10
      }
   },
   178866: {
      voting: 18,
      gender: true,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 21,
      expenses: {
         parliamentaryQuotaExpense: 949673.69,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2676123.13,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 60,
         commissionJustified: 26,
         commissionMiss: 100,
         plenaryPresence: 179,
         plenaryJustified: 27,
         plenaryMiss: 8,
         ordemOfDayPresence: 285,
         ordemOfDayMiss: 16
      }
   },
   178871: {
      voting: 93,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 172,
      expenses: {
         parliamentaryQuotaExpense: 835567.44,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2584555.92,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 1688,
         commissionJustified: 14,
         commissionMiss: 83,
         plenaryPresence: 204,
         plenaryJustified: 8,
         plenaryMiss: 3,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 2
      }
   },
   178873: {
      voting: 20,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 53,
      expenses: {
         parliamentaryQuotaExpense: 655239.29,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2261821.45,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 536,
         commissionJustified: 9,
         commissionMiss: 69,
         plenaryPresence: 204,
         plenaryJustified: 10,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 5
      }
   },
   178876: {
      voting: 88,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 31,
      expenses: {
         parliamentaryQuotaExpense: 710385.85,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2643657.97,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 403,
         commissionJustified: 7,
         commissionMiss: 44,
         plenaryPresence: 208,
         plenaryJustified: 7,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 3
      }
   },
   178879: {
      voting: 85,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 26,
      expenses: {
         parliamentaryQuotaExpense: 684548.65,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2644885.6,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 273,
         commissionJustified: 18,
         commissionMiss: 255,
         plenaryPresence: 197,
         plenaryJustified: 11,
         plenaryMiss: 7,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 9
      }
   },
   178881: {
      voting: 94,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 70,
      expenses: {
         parliamentaryQuotaExpense: 865613.83,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2547768.6,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 359,
         commissionJustified: 29,
         commissionMiss: 133,
         plenaryPresence: 196,
         plenaryJustified: 19,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 1
      }
   },
   178882: {
      voting: 89,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 1,
      expenses: {
         parliamentaryQuotaExpense: 651234.49,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2667503.02,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 32,
         commissionJustified: 0,
         commissionMiss: 158,
         plenaryPresence: 163,
         plenaryJustified: 52,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 0
      }
   },
   178884: {
      voting: 88,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 328,
      expenses: {
         parliamentaryQuotaExpense: 967915.68,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2504080.71,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 521,
         commissionJustified: 14,
         commissionMiss: 56,
         plenaryPresence: 190,
         plenaryJustified: 22,
         plenaryMiss: 3,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 3
      }
   },
   178886: {
      voting: 86,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 40,
      expenses: {
         parliamentaryQuotaExpense: 1013633.49,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2666766.94,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 213,
         commissionJustified: 9,
         commissionMiss: 221,
         plenaryPresence: 196,
         plenaryJustified: 7,
         plenaryMiss: 12,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 15
      }
   },
   178887: {
      voting: 21,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 7,
      expenses: {
         parliamentaryQuotaExpense: 200865.2,
         parliamentaryQuotaPeriod: 9,
         cabinetExpense: 978561.86,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 18,
         commissionJustified: 0,
         commissionMiss: 40,
         plenaryPresence: 27,
         plenaryJustified: 0,
         plenaryMiss: 0,
         ordemOfDayPresence: 42,
         ordemOfDayMiss: 0
      }
   },
   178889: {
      voting: 21,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 12,
      expenses: {
         parliamentaryQuotaExpense: 814611.74,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2524109.02,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 288,
         commissionJustified: 18,
         commissionMiss: 38,
         plenaryPresence: 183,
         plenaryJustified: 30,
         plenaryMiss: 2,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 2
      }
   },
   178895: {
      voting: 93,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 0,
      expenses: {
         parliamentaryQuotaExpense: 878290.19,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2676003.07,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 101,
         commissionJustified: 27,
         commissionMiss: 229,
         plenaryPresence: 184,
         plenaryJustified: 31,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 3
      }
   },
   178896: {
      voting: 87,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 48,
      expenses: {
         parliamentaryQuotaExpense: 705077.54,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2462584.17,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 168,
         commissionJustified: 15,
         commissionMiss: 50,
         plenaryPresence: 188,
         plenaryJustified: 19,
         plenaryMiss: 8,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 21
      }
   },
   178908: {
      voting: 96,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 29,
      expenses: {
         parliamentaryQuotaExpense: 977347.41,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2658376.76,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 263,
         commissionJustified: 18,
         commissionMiss: 222,
         plenaryPresence: 204,
         plenaryJustified: 4,
         plenaryMiss: 7,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 15
      }
   },
   178909: {
      voting: 88,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 18,
      expenses: {
         parliamentaryQuotaExpense: 938566.82,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2670830.21,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 148,
         commissionJustified: 10,
         commissionMiss: 169,
         plenaryPresence: 200,
         plenaryJustified: 12,
         plenaryMiss: 3,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 8
      }
   },
   178910: {
      voting: 94,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 147,
      expenses: {
         parliamentaryQuotaExpense: 667900.82,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2599359.5,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 440,
         commissionJustified: 9,
         commissionMiss: 21,
         plenaryPresence: 211,
         plenaryJustified: 4,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 2
      }
   },
   178912: {
      voting: 81,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 28,
      expenses: {
         parliamentaryQuotaExpense: 519182.35,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 1752817.57,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 157,
         commissionJustified: 3,
         commissionMiss: 102,
         plenaryPresence: 209,
         plenaryJustified: 4,
         plenaryMiss: 2,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 3
      }
   },
   178916: {
      voting: 74,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 148,
      expenses: {
         parliamentaryQuotaExpense: 725402.93,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2676724.86,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 160,
         commissionJustified: 5,
         commissionMiss: 80,
         plenaryPresence: 203,
         plenaryJustified: 8,
         plenaryMiss: 4,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 5
      }
   },
   178920: {
      voting: 88,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 1,
      expenses: {
         parliamentaryQuotaExpense: 978329.53,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2672700.59,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 52,
         commissionJustified: 2,
         commissionMiss: 86,
         plenaryPresence: 200,
         plenaryJustified: 11,
         plenaryMiss: 4,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 10
      }
   },
   178921: {
      voting: 92,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 0,
      expenses: {
         parliamentaryQuotaExpense: 1000279.08,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2624822.46,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 37,
         commissionJustified: 14,
         commissionMiss: 113,
         plenaryPresence: 157,
         plenaryJustified: 27,
         plenaryMiss: 31,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 45
      }
   },
   178922: {
      voting: 32,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 142,
      expenses: {
         parliamentaryQuotaExpense: 816807,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2383461.66,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 293,
         commissionJustified: 24,
         commissionMiss: 116,
         plenaryPresence: 192,
         plenaryJustified: 21,
         plenaryMiss: 2,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 4
      }
   },
   178924: {
      voting: 89,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 1,
      expenses: {
         parliamentaryQuotaExpense: 224066.88,
         parliamentaryQuotaPeriod: 12,
         cabinetExpense: 1071714.11,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 194,
         commissionJustified: 1,
         commissionMiss: 22,
         plenaryPresence: 70,
         plenaryJustified: 1,
         plenaryMiss: 2,
         ordemOfDayPresence: 102,
         ordemOfDayMiss: 2
      }
   },
   178925: {
      voting: 25,
      gender: true,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 38,
      expenses: {
         parliamentaryQuotaExpense: 634602.83,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2221431.93,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 497,
         commissionJustified: 23,
         commissionMiss: 81,
         plenaryPresence: 196,
         plenaryJustified: 18,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 3
      }
   },
   178927: {
      voting: 34,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 127,
      expenses: {
         parliamentaryQuotaExpense: 759928.32,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2508335.89,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 337,
         commissionJustified: 7,
         commissionMiss: 157,
         plenaryPresence: 214,
         plenaryJustified: 1,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 8
      }
   },
   178928: {
      voting: 92,
      gender: true,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 13,
      expenses: {
         parliamentaryQuotaExpense: 716902.39,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2482275.71,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 308,
         commissionJustified: 1,
         commissionMiss: 54,
         plenaryPresence: 212,
         plenaryJustified: 3,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 1
      }
   },
   178929: {
      voting: 91,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 23,
      expenses: {
         parliamentaryQuotaExpense: 547504.45,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2287346.37,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 1093,
         commissionJustified: 12,
         commissionMiss: 194,
         plenaryPresence: 213,
         plenaryJustified: 1,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 1
      }
   },
   178930: {
      voting: 91,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 12,
      expenses: {
         parliamentaryQuotaExpense: 935921.23,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2597932.55,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 426,
         commissionJustified: 20,
         commissionMiss: 122,
         plenaryPresence: 190,
         plenaryJustified: 22,
         plenaryMiss: 2,
         ordemOfDayPresence: 287,
         ordemOfDayMiss: 7
      }
   },
   178931: {
      voting: 51,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 1,
      expenses: {
         parliamentaryQuotaExpense: 732814.57,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2631195.94,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 211,
         commissionJustified: 3,
         commissionMiss: 195,
         plenaryPresence: 192,
         plenaryJustified: 7,
         plenaryMiss: 16,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 20
      }
   },
   178933: {
      voting: 89,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 19,
      expenses: {
         parliamentaryQuotaExpense: 886163.05,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2658475.89,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 154,
         commissionJustified: 2,
         commissionMiss: 31,
         plenaryPresence: 207,
         plenaryJustified: 4,
         plenaryMiss: 4,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 9
      }
   },
   178934: {
      voting: 91,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 13,
      expenses: {
         parliamentaryQuotaExpense: 871378.44,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2592106.99,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 120,
         commissionJustified: 5,
         commissionMiss: 31,
         plenaryPresence: 186,
         plenaryJustified: 28,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 1
      }
   },
   178935: {
      voting: 0,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 0,
      expenses: {
         parliamentaryQuotaExpense: 24105.46,
         parliamentaryQuotaPeriod: 1,
         cabinetExpense: 111519.96,
         cabinetPeriod: 1
      },
      presences: {
         commissionPresence: 0,
         commissionJustified: 0,
         commissionMiss: 0,
         plenaryPresence: 0,
         plenaryJustified: 0,
         plenaryMiss: 0,
         ordemOfDayPresence: 0,
         ordemOfDayMiss: 0
      }
   },
   178937: {
      voting: 87,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 6,
      expenses: {
         parliamentaryQuotaExpense: 410951.63,
         parliamentaryQuotaPeriod: 15,
         cabinetExpense: 1552976.98,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 144,
         commissionJustified: 4,
         commissionMiss: 73,
         plenaryPresence: 115,
         plenaryJustified: 5,
         plenaryMiss: 10,
         ordemOfDayPresence: 185,
         ordemOfDayMiss: 14
      }
   },
   178939: {
      voting: 56,
      gender: true,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 31,
      expenses: {
         parliamentaryQuotaExpense: 511175.67,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2480323.84,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 201,
         commissionJustified: 1,
         commissionMiss: 71,
         plenaryPresence: 201,
         plenaryJustified: 7,
         plenaryMiss: 7,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 15
      }
   },
   178943: {
      voting: 0,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 0,
      expenses: {
         parliamentaryQuotaExpense: 30767.91,
         parliamentaryQuotaPeriod: 1,
         cabinetExpense: 111589.05,
         cabinetPeriod: 4
      },
      presences: {
         commissionPresence: 121,
         commissionJustified: 2,
         commissionMiss: 10,
         plenaryPresence: 0,
         plenaryJustified: 0,
         plenaryMiss: 0,
         ordemOfDayPresence: 0,
         ordemOfDayMiss: 0
      }
   },
   178945: {
      voting: 89,
      gender: true,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 47,
      expenses: {
         parliamentaryQuotaExpense: 628305.66,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2651866.43,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 82,
         commissionJustified: 14,
         commissionMiss: 46,
         plenaryPresence: 199,
         plenaryJustified: 15,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 3
      }
   },
   178946: {
      voting: 73,
      gender: true,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 100,
      expenses: {
         parliamentaryQuotaExpense: 785924.41,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2594617.4,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 197,
         commissionJustified: 6,
         commissionMiss: 13,
         plenaryPresence: 173,
         plenaryJustified: 42,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 0
      }
   },
   178947: {
      voting: 91,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 27,
      expenses: {
         parliamentaryQuotaExpense: 832606.22,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2670865.79,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 401,
         commissionJustified: 5,
         commissionMiss: 207,
         plenaryPresence: 210,
         plenaryJustified: 1,
         plenaryMiss: 4,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 9
      }
   },
   178948: {
      voting: 88,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 11,
      expenses: {
         parliamentaryQuotaExpense: 911514.4,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2670082.3,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 118,
         commissionJustified: 15,
         commissionMiss: 75,
         plenaryPresence: 182,
         plenaryJustified: 21,
         plenaryMiss: 12,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 22
      }
   },
   178951: {
      voting: 34,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 15,
      expenses: {
         parliamentaryQuotaExpense: 804742.65,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2676803.29,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 288,
         commissionJustified: 17,
         commissionMiss: 104,
         plenaryPresence: 192,
         plenaryJustified: 23,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 0
      }
   },
   178952: {
      voting: 88,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 4,
      expenses: {
         parliamentaryQuotaExpense: 860677.97,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2664813.92,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 135,
         commissionJustified: 5,
         commissionMiss: 63,
         plenaryPresence: 209,
         plenaryJustified: 6,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 4
      }
   },
   178953: {
      voting: 74,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 14,
      expenses: {
         parliamentaryQuotaExpense: 573152.9,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2542054.04,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 85,
         commissionJustified: 25,
         commissionMiss: 104,
         plenaryPresence: 193,
         plenaryJustified: 19,
         plenaryMiss: 3,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 5
      }
   },
   178954: {
      voting: 87,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 27,
      expenses: {
         parliamentaryQuotaExpense: 663446.87,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2426638.76,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 97,
         commissionJustified: 10,
         commissionMiss: 80,
         plenaryPresence: 188,
         plenaryJustified: 18,
         plenaryMiss: 9,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 17
      }
   },
   178956: {
      voting: 84,
      gender: true,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 33,
      expenses: {
         parliamentaryQuotaExpense: 621282.24,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2543757.08,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 706,
         commissionJustified: 22,
         commissionMiss: 58,
         plenaryPresence: 200,
         plenaryJustified: 13,
         plenaryMiss: 2,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 5
      }
   },
   178959: {
      voting: 89,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 64,
      expenses: {
         parliamentaryQuotaExpense: 877949.51,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2601561.15,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 445,
         commissionJustified: 26,
         commissionMiss: 148,
         plenaryPresence: 194,
         plenaryJustified: 18,
         plenaryMiss: 3,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 5
      }
   },
   178961: {
      voting: 81,
      gender: true,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 11,
      expenses: {
         parliamentaryQuotaExpense: 930918.63,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2618259.81,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 255,
         commissionJustified: 36,
         commissionMiss: 58,
         plenaryPresence: 188,
         plenaryJustified: 19,
         plenaryMiss: 8,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 9
      }
   },
   178962: {
      voting: 90,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 8,
      expenses: {
         parliamentaryQuotaExpense: 522143.85,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2600726.05,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 178,
         commissionJustified: 17,
         commissionMiss: 48,
         plenaryPresence: 209,
         plenaryJustified: 5,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 1
      }
   },
   178963: {
      voting: 0,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 0,
      expenses: {
         parliamentaryQuotaExpense: 76937.81,
         parliamentaryQuotaPeriod: 5,
         cabinetExpense: 249187.93,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 105,
         commissionJustified: 0,
         commissionMiss: 40,
         plenaryPresence: 3,
         plenaryJustified: 0,
         plenaryMiss: 1,
         ordemOfDayPresence: 6,
         ordemOfDayMiss: 1
      }
   },
   178964: {
      voting: 30,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 84,
      expenses: {
         parliamentaryQuotaExpense: 640051.83,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2580112.38,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 367,
         commissionJustified: 11,
         commissionMiss: 41,
         plenaryPresence: 197,
         plenaryJustified: 14,
         plenaryMiss: 4,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 7
      }
   },
   178966: {
      voting: 86,
      gender: true,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 20,
      expenses: {
         parliamentaryQuotaExpense: 727128.54,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2600321.78,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 465,
         commissionJustified: 3,
         commissionMiss: 83,
         plenaryPresence: 213,
         plenaryJustified: 2,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 0
      }
   },
   178969: {
      voting: 73,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 1,
      expenses: {
         parliamentaryQuotaExpense: 936845.75,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2648850.11,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 410,
         commissionJustified: 56,
         commissionMiss: 120,
         plenaryPresence: 190,
         plenaryJustified: 19,
         plenaryMiss: 6,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 12
      }
   },
   178970: {
      voting: 21,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 277,
      expenses: {
         parliamentaryQuotaExpense: 971521.71,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2677518.91,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 224,
         commissionJustified: 2,
         commissionMiss: 159,
         plenaryPresence: 213,
         plenaryJustified: 2,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 0
      }
   },
   178972: {
      voting: 74,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 24,
      expenses: {
         parliamentaryQuotaExpense: 865507.1,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2608919.49,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 135,
         commissionJustified: 13,
         commissionMiss: 51,
         plenaryPresence: 199,
         plenaryJustified: 15,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 2
      }
   },
   178975: {
      voting: 87,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 53,
      expenses: {
         parliamentaryQuotaExpense: 709603.04,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2570852.35,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 85,
         commissionJustified: 14,
         commissionMiss: 48,
         plenaryPresence: 196,
         plenaryJustified: 19,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 0
      }
   },
   178977: {
      voting: 85,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 31,
      expenses: {
         parliamentaryQuotaExpense: 671965.47,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2127357.96,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 412,
         commissionJustified: 23,
         commissionMiss: 45,
         plenaryPresence: 201,
         plenaryJustified: 13,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 2
      }
   },
   178981: {
      voting: 90,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 49,
      expenses: {
         parliamentaryQuotaExpense: 902480.33,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2597592.9,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 377,
         commissionJustified: 7,
         commissionMiss: 51,
         plenaryPresence: 187,
         plenaryJustified: 21,
         plenaryMiss: 7,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 5
      }
   },
   178983: {
      voting: 93,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 92,
      expenses: {
         parliamentaryQuotaExpense: 171077.23,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2093762.72,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 173,
         commissionJustified: 0,
         commissionMiss: 12,
         plenaryPresence: 215,
         plenaryJustified: 0,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 3
      }
   },
   178985: {
      voting: 88,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 6,
      expenses: {
         parliamentaryQuotaExpense: 465731.34,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2582025.32,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 517,
         commissionJustified: 1,
         commissionMiss: 33,
         plenaryPresence: 214,
         plenaryJustified: 1,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 5
      }
   },
   178986: {
      voting: 21,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 97,
      expenses: {
         parliamentaryQuotaExpense: 759198.56,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2660036.99,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 277,
         commissionJustified: 12,
         commissionMiss: 129,
         plenaryPresence: 203,
         plenaryJustified: 11,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 3
      }
   },
   178987: {
      voting: 30,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 136,
      expenses: {
         parliamentaryQuotaExpense: 852603.39,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2665425.2,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 513,
         commissionJustified: 20,
         commissionMiss: 324,
         plenaryPresence: 204,
         plenaryJustified: 7,
         plenaryMiss: 4,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 9
      }
   },
   178989: {
      voting: 83,
      gender: true,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 8,
      expenses: {
         parliamentaryQuotaExpense: 543705.38,
         parliamentaryQuotaPeriod: 17,
         cabinetExpense: 2668645.37,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 341,
         commissionJustified: 33,
         commissionMiss: 107,
         plenaryPresence: 107,
         plenaryJustified: 29,
         plenaryMiss: 0,
         ordemOfDayPresence: 193,
         ordemOfDayMiss: 0
      }
   },
   178990: {
      voting: 84,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 156,
      expenses: {
         parliamentaryQuotaExpense: 805022.89,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2437206.34,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 310,
         commissionJustified: 10,
         commissionMiss: 1,
         plenaryPresence: 209,
         plenaryJustified: 5,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 1
      }
   },
   178992: {
      voting: 83,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 36,
      expenses: {
         parliamentaryQuotaExpense: 769343.42,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2558217.81,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 306,
         commissionJustified: 0,
         commissionMiss: 29,
         plenaryPresence: 208,
         plenaryJustified: 5,
         plenaryMiss: 2,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 4
      }
   },
   178993: {
      voting: 91,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 37,
      expenses: {
         parliamentaryQuotaExpense: 795828.79,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2406174.93,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 2951,
         commissionJustified: 10,
         commissionMiss: 42,
         plenaryPresence: 203,
         plenaryJustified: 3,
         plenaryMiss: 9,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 11
      }
   },
   178994: {
      voting: 87,
      gender: true,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 13,
      expenses: {
         parliamentaryQuotaExpense: 837250.06,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2651536.36,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 455,
         commissionJustified: 60,
         commissionMiss: 46,
         plenaryPresence: 200,
         plenaryJustified: 15,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 0
      }
   },
   178996: {
      voting: 89,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 0,
      expenses: {
         parliamentaryQuotaExpense: 427298.78,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2559493.45,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 163,
         commissionJustified: 2,
         commissionMiss: 25,
         plenaryPresence: 213,
         plenaryJustified: 1,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 2
      }
   },
   178997: {
      voting: 86,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 25,
      expenses: {
         parliamentaryQuotaExpense: 806224.84,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2653704.74,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 45,
         commissionJustified: 15,
         commissionMiss: 195,
         plenaryPresence: 171,
         plenaryJustified: 6,
         plenaryMiss: 7,
         ordemOfDayPresence: 240,
         ordemOfDayMiss: 13
      }
   },
   179000: {
      voting: 85,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 1,
      expenses: {
         parliamentaryQuotaExpense: 4967.26,
         parliamentaryQuotaPeriod: 5,
         cabinetExpense: 76308.38,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 108,
         commissionJustified: 0,
         commissionMiss: 27,
         plenaryPresence: 13,
         plenaryJustified: 0,
         plenaryMiss: 0,
         ordemOfDayPresence: 30,
         ordemOfDayMiss: 0
      }
   },
   179001: {
      voting: 89,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 0,
      expenses: {
         parliamentaryQuotaExpense: 790959.53,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2590055.93,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 199,
         commissionJustified: 2,
         commissionMiss: 50,
         plenaryPresence: 203,
         plenaryJustified: 4,
         plenaryMiss: 8,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 9
      }
   },
   179587: {
      voting: 96,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 148,
      expenses: {
         parliamentaryQuotaExpense: 565294.87,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2089596.66,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 322,
         commissionJustified: 24,
         commissionMiss: 92,
         plenaryPresence: 175,
         plenaryJustified: 40,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 0
      }
   },
   188097: {
      voting: 22,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 15,
      expenses: {
         parliamentaryQuotaExpense: 251631.38,
         parliamentaryQuotaPeriod: 12,
         cabinetExpense: 921663.38,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 214,
         commissionJustified: 4,
         commissionMiss: 102,
         plenaryPresence: 70,
         plenaryJustified: 3,
         plenaryMiss: 1,
         ordemOfDayPresence: 98,
         ordemOfDayMiss: 2
      }
   },
   191923: {
      voting: 73,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 30,
      expenses: {
         parliamentaryQuotaExpense: 949307.98,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2557315.32,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 450,
         commissionJustified: 8,
         commissionMiss: 48,
         plenaryPresence: 206,
         plenaryJustified: 9,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 0
      }
   },
   193726: {
      voting: 88,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 26,
      expenses: {
         parliamentaryQuotaExpense: 109805.73,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2128313.51,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 443,
         commissionJustified: 6,
         commissionMiss: 84,
         plenaryPresence: 214,
         plenaryJustified: 1,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 4
      }
   },
   194260: {
      voting: 88,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 0,
      expenses: {
         parliamentaryQuotaExpense: 957974.08,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2562283.13,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 96,
         commissionJustified: 8,
         commissionMiss: 166,
         plenaryPresence: 202,
         plenaryJustified: 2,
         plenaryMiss: 11,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 11
      }
   },
   195866: {
      voting: 90,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 1,
      expenses: {
         parliamentaryQuotaExpense: 837941.74,
         parliamentaryQuotaPeriod: 22,
         cabinetExpense: 2600186.24,
         cabinetPeriod: 24
      },
      presences: {
         commissionPresence: 142,
         commissionJustified: 0,
         commissionMiss: 137,
         plenaryPresence: 184,
         plenaryJustified: 3,
         plenaryMiss: 0,
         ordemOfDayPresence: 253,
         ordemOfDayMiss: 1
      }
   },
   196358: {
      voting: 90,
      gender: false,
      legislature: {
         legislatures: [
            55,
            56
         ],
         length: 2
      },
      speech: 6,
      expenses: {
         parliamentaryQuotaExpense: 652083.31,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2518190.41,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 297,
         commissionJustified: 1,
         commissionMiss: 35,
         plenaryPresence: 211,
         plenaryJustified: 4,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 0
      }
   },
   197438: {
      voting: 91,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 44,
      expenses: {
         parliamentaryQuotaExpense: 746758.52,
         parliamentaryQuotaPeriod: 20,
         cabinetExpense: 2471969.7,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 268,
         commissionJustified: 1,
         commissionMiss: 11,
         plenaryPresence: 174,
         plenaryJustified: 3,
         plenaryMiss: 1,
         ordemOfDayPresence: 242,
         ordemOfDayMiss: 3
      }
   },
   198197: {
      voting: 92,
      gender: true,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 38,
      expenses: {
         parliamentaryQuotaExpense: 213782.09,
         parliamentaryQuotaPeriod: 20,
         cabinetExpense: 2369884.39,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 375,
         commissionJustified: 11,
         commissionMiss: 21,
         plenaryPresence: 169,
         plenaryJustified: 17,
         plenaryMiss: 1,
         ordemOfDayPresence: 248,
         ordemOfDayMiss: 4
      }
   },
   198783: {
      voting: 83,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 33,
      expenses: {
         parliamentaryQuotaExpense: 500866.03,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2300026.2,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 384,
         commissionJustified: 1,
         commissionMiss: 72,
         plenaryPresence: 208,
         plenaryJustified: 4,
         plenaryMiss: 3,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 4
      }
   },
   204351: {
      voting: 95,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 18,
      expenses: {
         parliamentaryQuotaExpense: 410887.44,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2122788.84,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 348,
         commissionJustified: 8,
         commissionMiss: 159,
         plenaryPresence: 204,
         plenaryJustified: 7,
         plenaryMiss: 4,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 5
      }
   },
   204352: {
      voting: 29,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 205,
      expenses: {
         parliamentaryQuotaExpense: 949144.94,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2489637.1,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 481,
         commissionJustified: 23,
         commissionMiss: 74,
         plenaryPresence: 201,
         plenaryJustified: 13,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 2
      }
   },
   204353: {
      voting: 83,
      gender: true,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 29,
      expenses: {
         parliamentaryQuotaExpense: 993483.98,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2527060.4,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 217,
         commissionJustified: 39,
         commissionMiss: 192,
         plenaryPresence: 169,
         plenaryJustified: 26,
         plenaryMiss: 20,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 22
      }
   },
   204355: {
      voting: 85,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 76,
      expenses: {
         parliamentaryQuotaExpense: 844078.26,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2475099.95,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 311,
         commissionJustified: 11,
         commissionMiss: 68,
         plenaryPresence: 198,
         plenaryJustified: 14,
         plenaryMiss: 3,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 7
      }
   },
   204356: {
      voting: 91,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 1,
      expenses: {
         parliamentaryQuotaExpense: 425943.08,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2551810.23,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 327,
         commissionJustified: 0,
         commissionMiss: 5,
         plenaryPresence: 214,
         plenaryJustified: 1,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 0
      }
   },
   204357: {
      voting: 81,
      gender: true,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 13,
      expenses: {
         parliamentaryQuotaExpense: 438903.88,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2249393.15,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 175,
         commissionJustified: 0,
         commissionMiss: 19,
         plenaryPresence: 215,
         plenaryJustified: 0,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 1
      }
   },
   204358: {
      voting: 84,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 17,
      expenses: {
         parliamentaryQuotaExpense: 912748.72,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2559187.46,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 159,
         commissionJustified: 3,
         commissionMiss: 60,
         plenaryPresence: 206,
         plenaryJustified: 6,
         plenaryMiss: 3,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 7
      }
   },
   204359: {
      voting: 82,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 146,
      expenses: {
         parliamentaryQuotaExpense: 315180.54,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2394120.78,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 594,
         commissionJustified: 13,
         commissionMiss: 59,
         plenaryPresence: 207,
         plenaryJustified: 8,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 3
      }
   },
   204360: {
      voting: 46,
      gender: true,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 35,
      expenses: {
         parliamentaryQuotaExpense: 937572.13,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2515993.04,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 402,
         commissionJustified: 2,
         commissionMiss: 240,
         plenaryPresence: 211,
         plenaryJustified: 1,
         plenaryMiss: 3,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 6
      }
   },
   204361: {
      voting: 87,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 4,
      expenses: {
         parliamentaryQuotaExpense: 658791.36,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2476322.09,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 280,
         commissionJustified: 10,
         commissionMiss: 51,
         plenaryPresence: 203,
         plenaryJustified: 12,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 2
      }
   },
   204362: {
      voting: 93,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 2,
      expenses: {
         parliamentaryQuotaExpense: 477057.36,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2520183.45,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 179,
         commissionJustified: 1,
         commissionMiss: 44,
         plenaryPresence: 209,
         plenaryJustified: 6,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 1
      }
   },
   204363: {
      voting: 90,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 20,
      expenses: {
         parliamentaryQuotaExpense: 875527.36,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2433157.52,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 334,
         commissionJustified: 13,
         commissionMiss: 8,
         plenaryPresence: 204,
         plenaryJustified: 11,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 1
      }
   },
   204364: {
      voting: 79,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 229,
      expenses: {
         parliamentaryQuotaExpense: 572746.65,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2487400,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 180,
         commissionJustified: 5,
         commissionMiss: 159,
         plenaryPresence: 196,
         plenaryJustified: 13,
         plenaryMiss: 6,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 6
      }
   },
   204365: {
      voting: 83,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 91,
      expenses: {
         parliamentaryQuotaExpense: 125858.74,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 1650640.44,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 426,
         commissionJustified: 3,
         commissionMiss: 19,
         plenaryPresence: 215,
         plenaryJustified: 0,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 0
      }
   },
   204366: {
      voting: 88,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 17,
      expenses: {
         parliamentaryQuotaExpense: 394873.85,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2509460.75,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 838,
         commissionJustified: 5,
         commissionMiss: 15,
         plenaryPresence: 211,
         plenaryJustified: 2,
         plenaryMiss: 2,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 1
      }
   },
   204367: {
      voting: 95,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 25,
      expenses: {
         parliamentaryQuotaExpense: 833398.06,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2448292.17,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 398,
         commissionJustified: 6,
         commissionMiss: 39,
         plenaryPresence: 203,
         plenaryJustified: 8,
         plenaryMiss: 4,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 6
      }
   },
   204368: {
      voting: 93,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 1,
      expenses: {
         parliamentaryQuotaExpense: 816774.02,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2506023.14,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 148,
         commissionJustified: 26,
         commissionMiss: 68,
         plenaryPresence: 179,
         plenaryJustified: 36,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 1
      }
   },
   204369: {
      voting: 95,
      gender: true,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 18,
      expenses: {
         parliamentaryQuotaExpense: 241647.54,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 1740659.63,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 451,
         commissionJustified: 3,
         commissionMiss: 29,
         plenaryPresence: 210,
         plenaryJustified: 3,
         plenaryMiss: 2,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 1
      }
   },
   204370: {
      voting: 19,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 178,
      expenses: {
         parliamentaryQuotaExpense: 807539.78,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2505864.26,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 474,
         commissionJustified: 2,
         commissionMiss: 39,
         plenaryPresence: 210,
         plenaryJustified: 4,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 3
      }
   },
   204371: {
      voting: 64,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 40,
      expenses: {
         parliamentaryQuotaExpense: 580431.82,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 1914202.93,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 510,
         commissionJustified: 7,
         commissionMiss: 119,
         plenaryPresence: 202,
         plenaryJustified: 10,
         plenaryMiss: 3,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 8
      }
   },
   204372: {
      voting: 90,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 73,
      expenses: {
         parliamentaryQuotaExpense: 588937.24,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2465626.97,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 400,
         commissionJustified: 21,
         commissionMiss: 4,
         plenaryPresence: 201,
         plenaryJustified: 14,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 0
      }
   },
   204373: {
      voting: 83,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 28,
      expenses: {
         parliamentaryQuotaExpense: 556597.8,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2125557.92,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 188,
         commissionJustified: 4,
         commissionMiss: 45,
         plenaryPresence: 206,
         plenaryJustified: 9,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 0
      }
   },
   204374: {
      voting: 94,
      gender: true,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 115,
      expenses: {
         parliamentaryQuotaExpense: 525775.62,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2374109.02,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 393,
         commissionJustified: 7,
         commissionMiss: 0,
         plenaryPresence: 209,
         plenaryJustified: 6,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 3
      }
   },
   204375: {
      voting: 90,
      gender: true,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 22,
      expenses: {
         parliamentaryQuotaExpense: 999981.16,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2310706.02,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 249,
         commissionJustified: 15,
         commissionMiss: 27,
         plenaryPresence: 177,
         plenaryJustified: 29,
         plenaryMiss: 9,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 13
      }
   },
   204376: {
      voting: 96,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 17,
      expenses: {
         parliamentaryQuotaExpense: 320980.81,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2279831.98,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 411,
         commissionJustified: 18,
         commissionMiss: 29,
         plenaryPresence: 206,
         plenaryJustified: 7,
         plenaryMiss: 2,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 3
      }
   },
   204377: {
      voting: 83,
      gender: true,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 69,
      expenses: {
         parliamentaryQuotaExpense: 0,
         parliamentaryQuotaPeriod: 0,
         cabinetExpense: 2286669.12,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 1113,
         commissionJustified: 20,
         commissionMiss: 101,
         plenaryPresence: 198,
         plenaryJustified: 12,
         plenaryMiss: 5,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 9
      }
   },
   204378: {
      voting: 95,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 147,
      expenses: {
         parliamentaryQuotaExpense: 972173.87,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2087448.11,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 723,
         commissionJustified: 8,
         commissionMiss: 36,
         plenaryPresence: 208,
         plenaryJustified: 6,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 3
      }
   },
   204379: {
      voting: 89,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 51,
      expenses: {
         parliamentaryQuotaExpense: 991120.9,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2490047.12,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 86,
         commissionJustified: 6,
         commissionMiss: 79,
         plenaryPresence: 190,
         plenaryJustified: 17,
         plenaryMiss: 8,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 15
      }
   },
   204380: {
      voting: 89,
      gender: true,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 48,
      expenses: {
         parliamentaryQuotaExpense: 466930.13,
         parliamentaryQuotaPeriod: 17,
         cabinetExpense: 1688812.99,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 275,
         commissionJustified: 32,
         commissionMiss: 179,
         plenaryPresence: 132,
         plenaryJustified: 25,
         plenaryMiss: 6,
         ordemOfDayPresence: 223,
         ordemOfDayMiss: 13
      }
   },
   204381: {
      voting: 86,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 195,
      expenses: {
         parliamentaryQuotaExpense: 313265.91,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2382976.31,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 880,
         commissionJustified: 14,
         commissionMiss: 3,
         plenaryPresence: 200,
         plenaryJustified: 15,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 2
      }
   },
   204382: {
      voting: 89,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 12,
      expenses: {
         parliamentaryQuotaExpense: 828699.56,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2280847.39,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 322,
         commissionJustified: 8,
         commissionMiss: 29,
         plenaryPresence: 184,
         plenaryJustified: 20,
         plenaryMiss: 11,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 22
      }
   },
   204383: {
      voting: 43,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 61,
      expenses: {
         parliamentaryQuotaExpense: 341631.3,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2491182.72,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 398,
         commissionJustified: 3,
         commissionMiss: 33,
         plenaryPresence: 205,
         plenaryJustified: 5,
         plenaryMiss: 5,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 3
      }
   },
   204385: {
      voting: 69,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 15,
      expenses: {
         parliamentaryQuotaExpense: 703365.51,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2500186.78,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 115,
         commissionJustified: 21,
         commissionMiss: 58,
         plenaryPresence: 189,
         plenaryJustified: 22,
         plenaryMiss: 4,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 5
      }
   },
   204386: {
      voting: 88,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 10,
      expenses: {
         parliamentaryQuotaExpense: 477881.44,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 1977558.94,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 317,
         commissionJustified: 4,
         commissionMiss: 39,
         plenaryPresence: 210,
         plenaryJustified: 3,
         plenaryMiss: 2,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 4
      }
   },
   204387: {
      voting: 94,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 2,
      expenses: {
         parliamentaryQuotaExpense: 424052.68,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 1801549.28,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 156,
         commissionJustified: 1,
         commissionMiss: 4,
         plenaryPresence: 212,
         plenaryJustified: 3,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 0
      }
   },
   204388: {
      voting: 96,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 379,
      expenses: {
         parliamentaryQuotaExpense: 611931.22,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2369091.06,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 252,
         commissionJustified: 4,
         commissionMiss: 73,
         plenaryPresence: 209,
         plenaryJustified: 6,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 0
      }
   },
   204389: {
      voting: 29,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 156,
      expenses: {
         parliamentaryQuotaExpense: 165692.18,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2112822.94,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 515,
         commissionJustified: 2,
         commissionMiss: 32,
         plenaryPresence: 213,
         plenaryJustified: 0,
         plenaryMiss: 2,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 4
      }
   },
   204390: {
      voting: 92,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 15,
      expenses: {
         parliamentaryQuotaExpense: 820219.51,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2522563.55,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 247,
         commissionJustified: 2,
         commissionMiss: 62,
         plenaryPresence: 211,
         plenaryJustified: 3,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 1
      }
   },
   204391: {
      voting: 81,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 307,
      expenses: {
         parliamentaryQuotaExpense: 680311.71,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2513664.88,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 310,
         commissionJustified: 17,
         commissionMiss: 145,
         plenaryPresence: 199,
         plenaryJustified: 16,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 1
      }
   },
   204392: {
      voting: 93,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 5,
      expenses: {
         parliamentaryQuotaExpense: 797040.07,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2430431.76,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 353,
         commissionJustified: 12,
         commissionMiss: 130,
         plenaryPresence: 199,
         plenaryJustified: 15,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 2
      }
   },
   204393: {
      voting: 20,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 211,
      expenses: {
         parliamentaryQuotaExpense: 965219.57,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2561928.47,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 305,
         commissionJustified: 3,
         commissionMiss: 27,
         plenaryPresence: 199,
         plenaryJustified: 12,
         plenaryMiss: 4,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 5
      }
   },
   204394: {
      voting: 31,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 88,
      expenses: {
         parliamentaryQuotaExpense: 475195.01,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2363265.66,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 399,
         commissionJustified: 1,
         commissionMiss: 43,
         plenaryPresence: 207,
         plenaryJustified: 4,
         plenaryMiss: 4,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 9
      }
   },
   204395: {
      voting: 92,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 43,
      expenses: {
         parliamentaryQuotaExpense: 767790.23,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2554170.77,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 476,
         commissionJustified: 6,
         commissionMiss: 92,
         plenaryPresence: 206,
         plenaryJustified: 3,
         plenaryMiss: 6,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 9
      }
   },
   204396: {
      voting: 93,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 67,
      expenses: {
         parliamentaryQuotaExpense: 873956.26,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2433947.56,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 175,
         commissionJustified: 40,
         commissionMiss: 121,
         plenaryPresence: 202,
         plenaryJustified: 8,
         plenaryMiss: 5,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 4
      }
   },
   204398: {
      voting: 92,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 29,
      expenses: {
         parliamentaryQuotaExpense: 893230.49,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2490995.52,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 243,
         commissionJustified: 3,
         commissionMiss: 92,
         plenaryPresence: 206,
         plenaryJustified: 6,
         plenaryMiss: 3,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 6
      }
   },
   204400: {
      voting: 95,
      gender: true,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 55,
      expenses: {
         parliamentaryQuotaExpense: 788778.48,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2289658.24,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 447,
         commissionJustified: 39,
         commissionMiss: 11,
         plenaryPresence: 182,
         plenaryJustified: 33,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 0
      }
   },
   204403: {
      voting: 75,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 0,
      expenses: {
         parliamentaryQuotaExpense: 784637.69,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2556412.44,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 139,
         commissionJustified: 24,
         commissionMiss: 15,
         plenaryPresence: 167,
         plenaryJustified: 37,
         plenaryMiss: 11,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 15
      }
   },
   204404: {
      voting: 86,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 31,
      expenses: {
         parliamentaryQuotaExpense: 453335.72,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2320566.24,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 655,
         commissionJustified: 7,
         commissionMiss: 44,
         plenaryPresence: 214,
         plenaryJustified: 1,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 0
      }
   },
   204405: {
      voting: 61,
      gender: true,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 11,
      expenses: {
         parliamentaryQuotaExpense: 753853.42,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2465945.27,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 2057,
         commissionJustified: 5,
         commissionMiss: 69,
         plenaryPresence: 205,
         plenaryJustified: 9,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 3
      }
   },
   204406: {
      voting: 93,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 16,
      expenses: {
         parliamentaryQuotaExpense: 780318.92,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2457408.92,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 508,
         commissionJustified: 43,
         commissionMiss: 65,
         plenaryPresence: 208,
         plenaryJustified: 3,
         plenaryMiss: 4,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 6
      }
   },
   204407: {
      voting: 15,
      gender: true,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 488,
      expenses: {
         parliamentaryQuotaExpense: 541702.94,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2387799.66,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 418,
         commissionJustified: 15,
         commissionMiss: 20,
         plenaryPresence: 202,
         plenaryJustified: 8,
         plenaryMiss: 5,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 6
      }
   },
   204408: {
      voting: 90,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 41,
      expenses: {
         parliamentaryQuotaExpense: 863240.34,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2551467.91,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 190,
         commissionJustified: 21,
         commissionMiss: 71,
         plenaryPresence: 186,
         plenaryJustified: 26,
         plenaryMiss: 3,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 4
      }
   },
   204409: {
      voting: 87,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 11,
      expenses: {
         parliamentaryQuotaExpense: 292210.97,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2381247.5,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 312,
         commissionJustified: 7,
         commissionMiss: 29,
         plenaryPresence: 212,
         plenaryJustified: 3,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 2
      }
   },
   204410: {
      voting: 88,
      gender: true,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 27,
      expenses: {
         parliamentaryQuotaExpense: 849009.21,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2366099.02,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 220,
         commissionJustified: 22,
         commissionMiss: 195,
         plenaryPresence: 201,
         plenaryJustified: 9,
         plenaryMiss: 5,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 17
      }
   },
   204411: {
      voting: 95,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 50,
      expenses: {
         parliamentaryQuotaExpense: 854182.21,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2298034.25,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 244,
         commissionJustified: 16,
         commissionMiss: 189,
         plenaryPresence: 190,
         plenaryJustified: 11,
         plenaryMiss: 14,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 14
      }
   },
   204412: {
      voting: 88,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 21,
      expenses: {
         parliamentaryQuotaExpense: 543870.97,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 1875306.29,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 812,
         commissionJustified: 2,
         commissionMiss: 49,
         plenaryPresence: 213,
         plenaryJustified: 2,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 2
      }
   },
   204413: {
      voting: 95,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 3,
      expenses: {
         parliamentaryQuotaExpense: 710751.37,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2266286.59,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 635,
         commissionJustified: 9,
         commissionMiss: 23,
         plenaryPresence: 198,
         plenaryJustified: 16,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 2
      }
   },
   204414: {
      voting: 91,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 39,
      expenses: {
         parliamentaryQuotaExpense: 878499.95,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2553780.2,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 327,
         commissionJustified: 24,
         commissionMiss: 262,
         plenaryPresence: 204,
         plenaryJustified: 10,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 1
      }
   },
   204415: {
      voting: 91,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 14,
      expenses: {
         parliamentaryQuotaExpense: 942612.45,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2317857.47,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 313,
         commissionJustified: 14,
         commissionMiss: 31,
         plenaryPresence: 192,
         plenaryJustified: 16,
         plenaryMiss: 7,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 11
      }
   },
   204416: {
      voting: 96,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 69,
      expenses: {
         parliamentaryQuotaExpense: 543972.85,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2161284.73,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 611,
         commissionJustified: 14,
         commissionMiss: 52,
         plenaryPresence: 205,
         plenaryJustified: 9,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 1
      }
   },
   204418: {
      voting: 89,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 84,
      expenses: {
         parliamentaryQuotaExpense: 529682.49,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2046234.85,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 617,
         commissionJustified: 2,
         commissionMiss: 21,
         plenaryPresence: 211,
         plenaryJustified: 3,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 1
      }
   },
   204419: {
      voting: 88,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 21,
      expenses: {
         parliamentaryQuotaExpense: 709948.85,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2532801.67,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 209,
         commissionJustified: 24,
         commissionMiss: 31,
         plenaryPresence: 196,
         plenaryJustified: 18,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 4
      }
   },
   204420: {
      voting: 92,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 33,
      expenses: {
         parliamentaryQuotaExpense: 930420.64,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2339932.18,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 133,
         commissionJustified: 6,
         commissionMiss: 70,
         plenaryPresence: 202,
         plenaryJustified: 7,
         plenaryMiss: 6,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 6
      }
   },
   204421: {
      voting: 82,
      gender: true,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 5,
      expenses: {
         parliamentaryQuotaExpense: 958108.55,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2561402.23,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 387,
         commissionJustified: 35,
         commissionMiss: 18,
         plenaryPresence: 147,
         plenaryJustified: 66,
         plenaryMiss: 2,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 4
      }
   },
   204422: {
      voting: 90,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 2,
      expenses: {
         parliamentaryQuotaExpense: 912063.14,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 1935041.12,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 319,
         commissionJustified: 14,
         commissionMiss: 138,
         plenaryPresence: 206,
         plenaryJustified: 9,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 1
      }
   },
   204423: {
      voting: 92,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 30,
      expenses: {
         parliamentaryQuotaExpense: 786652.82,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2551108.39,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 94,
         commissionJustified: 14,
         commissionMiss: 80,
         plenaryPresence: 170,
         plenaryJustified: 45,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 0
      }
   },
   204425: {
      voting: 88,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 105,
      expenses: {
         parliamentaryQuotaExpense: 921965.18,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2544680.84,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 306,
         commissionJustified: 23,
         commissionMiss: 171,
         plenaryPresence: 191,
         plenaryJustified: 15,
         plenaryMiss: 9,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 18
      }
   },
   204426: {
      voting: 22,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 92,
      expenses: {
         parliamentaryQuotaExpense: 808902.75,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2256509.14,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 449,
         commissionJustified: 17,
         commissionMiss: 52,
         plenaryPresence: 208,
         plenaryJustified: 6,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 2
      }
   },
   204427: {
      voting: 83,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 27,
      expenses: {
         parliamentaryQuotaExpense: 950110.47,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2462527.17,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 220,
         commissionJustified: 18,
         commissionMiss: 107,
         plenaryPresence: 199,
         plenaryJustified: 16,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 4
      }
   },
   204428: {
      voting: 20,
      gender: true,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 27,
      expenses: {
         parliamentaryQuotaExpense: 940828.63,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2473286.33,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 66,
         commissionJustified: 23,
         commissionMiss: 55,
         plenaryPresence: 181,
         plenaryJustified: 28,
         plenaryMiss: 6,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 14
      }
   },
   204430: {
      voting: 88,
      gender: true,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 53,
      expenses: {
         parliamentaryQuotaExpense: 967379.31,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2466863.32,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 379,
         commissionJustified: 33,
         commissionMiss: 141,
         plenaryPresence: 202,
         plenaryJustified: 10,
         plenaryMiss: 3,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 7
      }
   },
   204431: {
      voting: 89,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 0,
      expenses: {
         parliamentaryQuotaExpense: 882637.25,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2526463.01,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 134,
         commissionJustified: 6,
         commissionMiss: 180,
         plenaryPresence: 206,
         plenaryJustified: 4,
         plenaryMiss: 5,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 9
      }
   },
   204432: {
      voting: 88,
      gender: true,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 2,
      expenses: {
         parliamentaryQuotaExpense: 898319.96,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2524526.7,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 226,
         commissionJustified: 1,
         commissionMiss: 123,
         plenaryPresence: 211,
         plenaryJustified: 3,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 3
      }
   },
   204434: {
      voting: 87,
      gender: true,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 14,
      expenses: {
         parliamentaryQuotaExpense: 983164.26,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2490143.97,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 353,
         commissionJustified: 23,
         commissionMiss: 132,
         plenaryPresence: 198,
         plenaryJustified: 15,
         plenaryMiss: 2,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 2
      }
   },
   204435: {
      voting: 43,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 8,
      expenses: {
         parliamentaryQuotaExpense: 1045404.43,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2494793.86,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 287,
         commissionJustified: 9,
         commissionMiss: 76,
         plenaryPresence: 200,
         plenaryJustified: 13,
         plenaryMiss: 2,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 4
      }
   },
   204436: {
      voting: 84,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 40,
      expenses: {
         parliamentaryQuotaExpense: 897856.17,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2562863.91,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 203,
         commissionJustified: 25,
         commissionMiss: 103,
         plenaryPresence: 192,
         plenaryJustified: 23,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 0
      }
   },
   204437: {
      voting: 89,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 1,
      expenses: {
         parliamentaryQuotaExpense: 909736.22,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2464182.14,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 96,
         commissionJustified: 6,
         commissionMiss: 64,
         plenaryPresence: 185,
         plenaryJustified: 9,
         plenaryMiss: 21,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 28
      }
   },
   204438: {
      voting: 91,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 3,
      expenses: {
         parliamentaryQuotaExpense: 941093.13,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2508945.56,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 368,
         commissionJustified: 2,
         commissionMiss: 24,
         plenaryPresence: 201,
         plenaryJustified: 6,
         plenaryMiss: 8,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 14
      }
   },
   204439: {
      voting: 85,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 14,
      expenses: {
         parliamentaryQuotaExpense: 763488.58,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2382504.84,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 256,
         commissionJustified: 81,
         commissionMiss: 10,
         plenaryPresence: 213,
         plenaryJustified: 2,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 4
      }
   },
   204440: {
      voting: 89,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 46,
      expenses: {
         parliamentaryQuotaExpense: 674556.52,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2366747.95,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 475,
         commissionJustified: 6,
         commissionMiss: 50,
         plenaryPresence: 203,
         plenaryJustified: 10,
         plenaryMiss: 2,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 3
      }
   },
   204441: {
      voting: 93,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 394,
      expenses: {
         parliamentaryQuotaExpense: 728420.99,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2551851.43,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 262,
         commissionJustified: 7,
         commissionMiss: 97,
         plenaryPresence: 206,
         plenaryJustified: 3,
         plenaryMiss: 6,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 14
      }
   },
   204442: {
      voting: 93,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 43,
      expenses: {
         parliamentaryQuotaExpense: 804882.31,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2483586.58,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 370,
         commissionJustified: 11,
         commissionMiss: 21,
         plenaryPresence: 200,
         plenaryJustified: 15,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 2
      }
   },
   204444: {
      voting: 96,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 3,
      expenses: {
         parliamentaryQuotaExpense: 636362.4,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2396642.74,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 187,
         commissionJustified: 34,
         commissionMiss: 132,
         plenaryPresence: 191,
         plenaryJustified: 19,
         plenaryMiss: 5,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 5
      }
   },
   204446: {
      voting: 94,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 21,
      expenses: {
         parliamentaryQuotaExpense: 690239.53,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2541700.95,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 277,
         commissionJustified: 0,
         commissionMiss: 78,
         plenaryPresence: 210,
         plenaryJustified: 4,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 2
      }
   },
   204448: {
      voting: 89,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 2,
      expenses: {
         parliamentaryQuotaExpense: 730410.76,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2388584.16,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 313,
         commissionJustified: 25,
         commissionMiss: 30,
         plenaryPresence: 193,
         plenaryJustified: 20,
         plenaryMiss: 2,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 4
      }
   },
   204449: {
      voting: 96,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 36,
      expenses: {
         parliamentaryQuotaExpense: 667155.38,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2390774.25,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 278,
         commissionJustified: 4,
         commissionMiss: 40,
         plenaryPresence: 204,
         plenaryJustified: 5,
         plenaryMiss: 6,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 14
      }
   },
   204450: {
      voting: 89,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 28,
      expenses: {
         parliamentaryQuotaExpense: 788459.75,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2411468.81,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 378,
         commissionJustified: 12,
         commissionMiss: 259,
         plenaryPresence: 198,
         plenaryJustified: 12,
         plenaryMiss: 5,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 12
      }
   },
   204451: {
      voting: 73,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 25,
      expenses: {
         parliamentaryQuotaExpense: 828595.84,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2466061,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 619,
         commissionJustified: 9,
         commissionMiss: 88,
         plenaryPresence: 209,
         plenaryJustified: 6,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 2
      }
   },
   204452: {
      voting: 94,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 24,
      expenses: {
         parliamentaryQuotaExpense: 834623.91,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2527739.24,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 542,
         commissionJustified: 5,
         commissionMiss: 49,
         plenaryPresence: 207,
         plenaryJustified: 8,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 2
      }
   },
   204453: {
      voting: 21,
      gender: true,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 52,
      expenses: {
         parliamentaryQuotaExpense: 814913.16,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2329336.35,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 272,
         commissionJustified: 7,
         commissionMiss: 19,
         plenaryPresence: 205,
         plenaryJustified: 9,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 4
      }
   },
   204454: {
      voting: 95,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 35,
      expenses: {
         parliamentaryQuotaExpense: 813651.91,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2477675.93,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 373,
         commissionJustified: 7,
         commissionMiss: 204,
         plenaryPresence: 196,
         plenaryJustified: 14,
         plenaryMiss: 5,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 9
      }
   },
   204455: {
      voting: 94,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 83,
      expenses: {
         parliamentaryQuotaExpense: 711716.71,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2533568.42,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 864,
         commissionJustified: 2,
         commissionMiss: 27,
         plenaryPresence: 214,
         plenaryJustified: 1,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 1
      }
   },
   204456: {
      voting: 88,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 3,
      expenses: {
         parliamentaryQuotaExpense: 776602.16,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2326562.27,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 248,
         commissionJustified: 3,
         commissionMiss: 133,
         plenaryPresence: 202,
         plenaryJustified: 9,
         plenaryMiss: 4,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 7
      }
   },
   204458: {
      voting: 95,
      gender: true,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 15,
      expenses: {
         parliamentaryQuotaExpense: 581757.73,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2202682.96,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 449,
         commissionJustified: 21,
         commissionMiss: 39,
         plenaryPresence: 163,
         plenaryJustified: 15,
         plenaryMiss: 9,
         ordemOfDayPresence: 245,
         ordemOfDayMiss: 12
      }
   },
   204459: {
      voting: 87,
      gender: true,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 15,
      expenses: {
         parliamentaryQuotaExpense: 745261.73,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2428422.12,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 325,
         commissionJustified: 16,
         commissionMiss: 86,
         plenaryPresence: 195,
         plenaryJustified: 20,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 2
      }
   },
   204460: {
      voting: 94,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 56,
      expenses: {
         parliamentaryQuotaExpense: 499419.92,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2390963.34,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 385,
         commissionJustified: 0,
         commissionMiss: 7,
         plenaryPresence: 208,
         plenaryJustified: 2,
         plenaryMiss: 5,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 3
      }
   },
   204461: {
      voting: 82,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 352,
      expenses: {
         parliamentaryQuotaExpense: 157608.09,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 1365918.74,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 675,
         commissionJustified: 12,
         commissionMiss: 23,
         plenaryPresence: 208,
         plenaryJustified: 7,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 1
      }
   },
   204462: {
      voting: 95,
      gender: true,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 29,
      expenses: {
         parliamentaryQuotaExpense: 351935.12,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 1633587.31,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 779,
         commissionJustified: 23,
         commissionMiss: 3,
         plenaryPresence: 203,
         plenaryJustified: 12,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 1
      }
   },
   204464: {
      voting: 15,
      gender: true,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 78,
      expenses: {
         parliamentaryQuotaExpense: 624922.22,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2546593.86,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 195,
         commissionJustified: 19,
         commissionMiss: 123,
         plenaryPresence: 151,
         plenaryJustified: 64,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 3
      }
   },
   204465: {
      voting: 90,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 2,
      expenses: {
         parliamentaryQuotaExpense: 938968.55,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2410555.42,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 163,
         commissionJustified: 32,
         commissionMiss: 79,
         plenaryPresence: 175,
         plenaryJustified: 32,
         plenaryMiss: 8,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 10
      }
   },
   204466: {
      voting: 75,
      gender: true,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 27,
      expenses: {
         parliamentaryQuotaExpense: 936166.17,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2540114.67,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 589,
         commissionJustified: 97,
         commissionMiss: 48,
         plenaryPresence: 155,
         plenaryJustified: 59,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 2
      }
   },
   204467: {
      voting: 21,
      gender: true,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 94,
      expenses: {
         parliamentaryQuotaExpense: 704739.72,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2549629.38,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 522,
         commissionJustified: 11,
         commissionMiss: 26,
         plenaryPresence: 202,
         plenaryJustified: 12,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 1
      }
   },
   204468: {
      voting: 33,
      gender: true,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 394,
      expenses: {
         parliamentaryQuotaExpense: 650131.17,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 1893837.19,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 928,
         commissionJustified: 16,
         commissionMiss: 33,
         plenaryPresence: 203,
         plenaryJustified: 8,
         plenaryMiss: 4,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 3
      }
   },
   204471: {
      voting: 82,
      gender: true,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 24,
      expenses: {
         parliamentaryQuotaExpense: 921469.63,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2384284.99,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 484,
         commissionJustified: 1,
         commissionMiss: 82,
         plenaryPresence: 209,
         plenaryJustified: 3,
         plenaryMiss: 3,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 3
      }
   },
   204472: {
      voting: 94,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 110,
      expenses: {
         parliamentaryQuotaExpense: 660908.43,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2443227.75,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 395,
         commissionJustified: 24,
         commissionMiss: 154,
         plenaryPresence: 195,
         plenaryJustified: 18,
         plenaryMiss: 2,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 3
      }
   },
   204473: {
      voting: 95,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 50,
      expenses: {
         parliamentaryQuotaExpense: 797472.12,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2368532.31,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 377,
         commissionJustified: 33,
         commissionMiss: 32,
         plenaryPresence: 187,
         plenaryJustified: 25,
         plenaryMiss: 3,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 3
      }
   },
   204474: {
      voting: 87,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 4,
      expenses: {
         parliamentaryQuotaExpense: 656965.77,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2541783.9,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 397,
         commissionJustified: 5,
         commissionMiss: 9,
         plenaryPresence: 195,
         plenaryJustified: 20,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 0
      }
   },
   204475: {
      voting: 87,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 3,
      expenses: {
         parliamentaryQuotaExpense: 811533.49,
         parliamentaryQuotaPeriod: 20,
         cabinetExpense: 2377479.19,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 182,
         commissionJustified: 3,
         commissionMiss: 108,
         plenaryPresence: 178,
         plenaryJustified: 6,
         plenaryMiss: 10,
         ordemOfDayPresence: 256,
         ordemOfDayMiss: 18
      }
   },
   204476: {
      voting: 90,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 37,
      expenses: {
         parliamentaryQuotaExpense: 805349.04,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2401689,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 310,
         commissionJustified: 1,
         commissionMiss: 29,
         plenaryPresence: 206,
         plenaryJustified: 8,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 3
      }
   },
   204477: {
      voting: 91,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 35,
      expenses: {
         parliamentaryQuotaExpense: 442680.93,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2215940.41,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 962,
         commissionJustified: 19,
         commissionMiss: 9,
         plenaryPresence: 202,
         plenaryJustified: 13,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 0
      }
   },
   204479: {
      voting: 94,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 8,
      expenses: {
         parliamentaryQuotaExpense: 859734.45,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2280061.58,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 506,
         commissionJustified: 14,
         commissionMiss: 35,
         plenaryPresence: 201,
         plenaryJustified: 13,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 3
      }
   },
   204480: {
      voting: 19,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 307,
      expenses: {
         parliamentaryQuotaExpense: 824321.48,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2556105.45,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 404,
         commissionJustified: 14,
         commissionMiss: 91,
         plenaryPresence: 205,
         plenaryJustified: 7,
         plenaryMiss: 3,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 3
      }
   },
   204481: {
      voting: 95,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 36,
      expenses: {
         parliamentaryQuotaExpense: 867050.75,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2516729.57,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 141,
         commissionJustified: 30,
         commissionMiss: 165,
         plenaryPresence: 183,
         plenaryJustified: 25,
         plenaryMiss: 7,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 11
      }
   },
   204482: {
      voting: 89,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 13,
      expenses: {
         parliamentaryQuotaExpense: 850935.89,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2541326.55,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 172,
         commissionJustified: 8,
         commissionMiss: 27,
         plenaryPresence: 201,
         plenaryJustified: 13,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 7
      }
   },
   204483: {
      voting: 31,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 61,
      expenses: {
         parliamentaryQuotaExpense: 430073.68,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 1747606.65,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 695,
         commissionJustified: 4,
         commissionMiss: 11,
         plenaryPresence: 208,
         plenaryJustified: 6,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 2
      }
   },
   204484: {
      voting: 93,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 109,
      expenses: {
         parliamentaryQuotaExpense: 457830.48,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 1585550.85,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 904,
         commissionJustified: 7,
         commissionMiss: 43,
         plenaryPresence: 205,
         plenaryJustified: 7,
         plenaryMiss: 3,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 3
      }
   },
   204485: {
      voting: 88,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 6,
      expenses: {
         parliamentaryQuotaExpense: 421049.55,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 1835012.44,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 260,
         commissionJustified: 0,
         commissionMiss: 61,
         plenaryPresence: 210,
         plenaryJustified: 2,
         plenaryMiss: 3,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 6
      }
   },
   204487: {
      voting: 72,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 103,
      expenses: {
         parliamentaryQuotaExpense: 749223.22,
         parliamentaryQuotaPeriod: 20,
         cabinetExpense: 2563788.85,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 441,
         commissionJustified: 17,
         commissionMiss: 86,
         plenaryPresence: 182,
         plenaryJustified: 7,
         plenaryMiss: 6,
         ordemOfDayPresence: 264,
         ordemOfDayMiss: 5
      }
   },
   204488: {
      voting: 44,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 69,
      expenses: {
         parliamentaryQuotaExpense: 462251.83,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2507863.34,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 177,
         commissionJustified: 0,
         commissionMiss: 36,
         plenaryPresence: 214,
         plenaryJustified: 1,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 3
      }
   },
   204489: {
      voting: 39,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 0,
      expenses: {
         parliamentaryQuotaExpense: 777314.04,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2518441.79,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 201,
         commissionJustified: 4,
         commissionMiss: 68,
         plenaryPresence: 201,
         plenaryJustified: 9,
         plenaryMiss: 5,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 6
      }
   },
   204490: {
      voting: 93,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 40,
      expenses: {
         parliamentaryQuotaExpense: 644602.3,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2359435.67,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 702,
         commissionJustified: 0,
         commissionMiss: 10,
         plenaryPresence: 204,
         plenaryJustified: 5,
         plenaryMiss: 6,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 11
      }
   },
   204491: {
      voting: 90,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 10,
      expenses: {
         parliamentaryQuotaExpense: 716558.5,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2269030.98,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 335,
         commissionJustified: 6,
         commissionMiss: 43,
         plenaryPresence: 201,
         plenaryJustified: 6,
         plenaryMiss: 8,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 6
      }
   },
   204492: {
      voting: 22,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 41,
      expenses: {
         parliamentaryQuotaExpense: 797655.65,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2563705.24,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 346,
         commissionJustified: 12,
         commissionMiss: 130,
         plenaryPresence: 203,
         plenaryJustified: 8,
         plenaryMiss: 4,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 4
      }
   },
   204494: {
      voting: 88,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 57,
      expenses: {
         parliamentaryQuotaExpense: 679122.18,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2521372.32,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 1060,
         commissionJustified: 25,
         commissionMiss: 113,
         plenaryPresence: 210,
         plenaryJustified: 5,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 0
      }
   },
   204495: {
      voting: 22,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 133,
      expenses: {
         parliamentaryQuotaExpense: 921057.38,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2511413.56,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 391,
         commissionJustified: 5,
         commissionMiss: 200,
         plenaryPresence: 200,
         plenaryJustified: 8,
         plenaryMiss: 7,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 5
      }
   },
   204496: {
      voting: 89,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 52,
      expenses: {
         parliamentaryQuotaExpense: 938714.01,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2560916.87,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 174,
         commissionJustified: 11,
         commissionMiss: 69,
         plenaryPresence: 205,
         plenaryJustified: 9,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 0
      }
   },
   204497: {
      voting: 92,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 15,
      expenses: {
         parliamentaryQuotaExpense: 291747.08,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2537722.3,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 85,
         commissionJustified: 10,
         commissionMiss: 0,
         plenaryPresence: 200,
         plenaryJustified: 15,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 1
      }
   },
   204498: {
      voting: 88,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 3,
      expenses: {
         parliamentaryQuotaExpense: 971737.64,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2560181.7,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 182,
         commissionJustified: 8,
         commissionMiss: 98,
         plenaryPresence: 194,
         plenaryJustified: 14,
         plenaryMiss: 7,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 6
      }
   },
   204499: {
      voting: 47,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 44,
      expenses: {
         parliamentaryQuotaExpense: 923827.71,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2561323.06,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 213,
         commissionJustified: 7,
         commissionMiss: 53,
         plenaryPresence: 205,
         plenaryJustified: 7,
         plenaryMiss: 3,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 7
      }
   },
   204500: {
      voting: 87,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 36,
      expenses: {
         parliamentaryQuotaExpense: 967891.53,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2539789.72,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 486,
         commissionJustified: 30,
         commissionMiss: 23,
         plenaryPresence: 198,
         plenaryJustified: 16,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 3
      }
   },
   204501: {
      voting: 20,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 114,
      expenses: {
         parliamentaryQuotaExpense: 862435.65,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2511906.13,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 682,
         commissionJustified: 16,
         commissionMiss: 114,
         plenaryPresence: 205,
         plenaryJustified: 7,
         plenaryMiss: 3,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 7
      }
   },
   204502: {
      voting: 88,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 13,
      expenses: {
         parliamentaryQuotaExpense: 838436.05,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2492835.28,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 284,
         commissionJustified: 10,
         commissionMiss: 54,
         plenaryPresence: 193,
         plenaryJustified: 17,
         plenaryMiss: 5,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 10
      }
   },
   204503: {
      voting: 21,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 171,
      expenses: {
         parliamentaryQuotaExpense: 853945.66,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2535644.15,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 798,
         commissionJustified: 18,
         commissionMiss: 191,
         plenaryPresence: 204,
         plenaryJustified: 10,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 1
      }
   },
   204504: {
      voting: 92,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 15,
      expenses: {
         parliamentaryQuotaExpense: 851665.17,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2499176.05,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 491,
         commissionJustified: 1,
         commissionMiss: 73,
         plenaryPresence: 200,
         plenaryJustified: 7,
         plenaryMiss: 8,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 12
      }
   },
   204505: {
      voting: 88,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 7,
      expenses: {
         parliamentaryQuotaExpense: 952693.23,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2509687.42,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 160,
         commissionJustified: 13,
         commissionMiss: 77,
         plenaryPresence: 196,
         plenaryJustified: 14,
         plenaryMiss: 5,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 10
      }
   },
   204506: {
      voting: 79,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 14,
      expenses: {
         parliamentaryQuotaExpense: 802484.7,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2542745.59,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 121,
         commissionJustified: 11,
         commissionMiss: 10,
         plenaryPresence: 168,
         plenaryJustified: 47,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 0
      }
   },
   204507: {
      voting: 95,
      gender: true,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 29,
      expenses: {
         parliamentaryQuotaExpense: 718272.54,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2386846,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 297,
         commissionJustified: 30,
         commissionMiss: 37,
         plenaryPresence: 172,
         plenaryJustified: 30,
         plenaryMiss: 13,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 5
      }
   },
   204508: {
      voting: 83,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 31,
      expenses: {
         parliamentaryQuotaExpense: 799472.84,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2359401.8,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 552,
         commissionJustified: 27,
         commissionMiss: 259,
         plenaryPresence: 193,
         plenaryJustified: 10,
         plenaryMiss: 12,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 19
      }
   },
   204509: {
      voting: 14,
      gender: true,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 47,
      expenses: {
         parliamentaryQuotaExpense: 553977.23,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2522687.03,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 166,
         commissionJustified: 96,
         commissionMiss: 41,
         plenaryPresence: 154,
         plenaryJustified: 43,
         plenaryMiss: 0,
         ordemOfDayPresence: 269,
         ordemOfDayMiss: 2
      }
   },
   204510: {
      voting: 89,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 23,
      expenses: {
         parliamentaryQuotaExpense: 414510.03,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 1995316.33,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 453,
         commissionJustified: 3,
         commissionMiss: 52,
         plenaryPresence: 213,
         plenaryJustified: 2,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 2
      }
   },
   204511: {
      voting: 86,
      gender: false
   },
   204512: {
      voting: 91,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 60,
      expenses: {
         parliamentaryQuotaExpense: 786358.55,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2186300.22,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 952,
         commissionJustified: 9,
         commissionMiss: 2,
         plenaryPresence: 206,
         plenaryJustified: 8,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 2
      }
   },
   204513: {
      voting: 92,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 27,
      expenses: {
         parliamentaryQuotaExpense: 309427.15,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2238182.33,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 197,
         commissionJustified: 1,
         commissionMiss: 83,
         plenaryPresence: 209,
         plenaryJustified: 5,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 5
      }
   },
   204514: {
      voting: 95,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 180,
      expenses: {
         parliamentaryQuotaExpense: 415421.17,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2237446.42,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 472,
         commissionJustified: 3,
         commissionMiss: 129,
         plenaryPresence: 205,
         plenaryJustified: 4,
         plenaryMiss: 6,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 2
      }
   },
   204515: {
      voting: 54,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 33,
      expenses: {
         parliamentaryQuotaExpense: 674511.89,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2508170.45,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 274,
         commissionJustified: 2,
         commissionMiss: 37,
         plenaryPresence: 209,
         plenaryJustified: 6,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 2
      }
   },
   204516: {
      voting: 84,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 151,
      expenses: {
         parliamentaryQuotaExpense: 317237.02,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 1488011.89,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 420,
         commissionJustified: 3,
         commissionMiss: 43,
         plenaryPresence: 206,
         plenaryJustified: 5,
         plenaryMiss: 4,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 4
      }
   },
   204517: {
      voting: 90,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
   },
   204518: {
      voting: 93,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 18,
      expenses: {
         parliamentaryQuotaExpense: 626257.79,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2381652.52,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 1012,
         commissionJustified: 7,
         commissionMiss: 85,
         plenaryPresence: 199,
         plenaryJustified: 8,
         plenaryMiss: 8,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 13
      }
   },
   204519: {
      voting: 82,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 152,
      expenses: {
         parliamentaryQuotaExpense: 54599.86,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 844360.93,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 754,
         commissionJustified: 16,
         commissionMiss: 5,
         plenaryPresence: 204,
         plenaryJustified: 11,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 1
      }
   },
   204520: {
      voting: 94,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 22,
      expenses: {
         parliamentaryQuotaExpense: 262052.9,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 1995246.05,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 407,
         commissionJustified: 0,
         commissionMiss: 6,
         plenaryPresence: 214,
         plenaryJustified: 1,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 3
      }
   },
   204521: {
      voting: 91,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 18,
      expenses: {
         parliamentaryQuotaExpense: 405356.94,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2528869.49,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 139,
         commissionJustified: 0,
         commissionMiss: 31,
         plenaryPresence: 210,
         plenaryJustified: 1,
         plenaryMiss: 4,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 4
      }
   },
   204522: {
      voting: 90,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 17,
      expenses: {
         parliamentaryQuotaExpense: 378126.65,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2127998.1,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 339,
         commissionJustified: 5,
         commissionMiss: 7,
         plenaryPresence: 211,
         plenaryJustified: 3,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 2
      }
   },
   204523: {
      voting: 83,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 41,
      expenses: {
         parliamentaryQuotaExpense: 330457.19,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 1230779.72,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 489,
         commissionJustified: 9,
         commissionMiss: 55,
         plenaryPresence: 208,
         plenaryJustified: 6,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 3
      }
   },
   204524: {
      voting: 92,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 5,
      expenses: {
         parliamentaryQuotaExpense: 582969.67,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2512344.52,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 381,
         commissionJustified: 10,
         commissionMiss: 108,
         plenaryPresence: 210,
         plenaryJustified: 5,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 2
      }
   },
   204525: {
      voting: 63,
      gender: true,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 16,
      expenses: {
         parliamentaryQuotaExpense: 581317.51,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2382372.32,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 566,
         commissionJustified: 5,
         commissionMiss: 5,
         plenaryPresence: 210,
         plenaryJustified: 5,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 2
      }
   },
   204526: {
      voting: 91,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 12,
      expenses: {
         parliamentaryQuotaExpense: 188232.99,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 986788.57,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 426,
         commissionJustified: 7,
         commissionMiss: 67,
         plenaryPresence: 206,
         plenaryJustified: 8,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 5
      }
   },
   204527: {
      voting: 87,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 37,
      expenses: {
         parliamentaryQuotaExpense: 737658.57,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2406456.26,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 407,
         commissionJustified: 24,
         commissionMiss: 71,
         plenaryPresence: 197,
         plenaryJustified: 14,
         plenaryMiss: 4,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 14
      }
   },
   204528: {
      voting: 84,
      gender: true,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 66,
      expenses: {
         parliamentaryQuotaExpense: 156471.38,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 955337.31,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 680,
         commissionJustified: 3,
         commissionMiss: 13,
         plenaryPresence: 215,
         plenaryJustified: 0,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 1
      }
   },
   204529: {
      voting: 94,
      gender: true,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 0,
      expenses: {
         parliamentaryQuotaExpense: 709290.88,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2302143.9,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 320,
         commissionJustified: 16,
         commissionMiss: 216,
         plenaryPresence: 191,
         plenaryJustified: 17,
         plenaryMiss: 7,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 8
      }
   },
   204530: {
      voting: 44,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 14,
      expenses: {
         parliamentaryQuotaExpense: 226378.73,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2266227.32,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 494,
         commissionJustified: 15,
         commissionMiss: 20,
         plenaryPresence: 209,
         plenaryJustified: 5,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 2
      }
   },
   204531: {
      voting: 96,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 26,
      expenses: {
         parliamentaryQuotaExpense: 689019.54,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2010682.86,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 333,
         commissionJustified: 5,
         commissionMiss: 53,
         plenaryPresence: 212,
         plenaryJustified: 3,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 2
      }
   },
   204532: {
      voting: 84,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 108,
      expenses: {
         parliamentaryQuotaExpense: 150822.16,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 1244683.27,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 411,
         commissionJustified: 1,
         commissionMiss: 11,
         plenaryPresence: 212,
         plenaryJustified: 3,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 1
      }
   },
   204533: {
      voting: 31,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 38,
      expenses: {
         parliamentaryQuotaExpense: 778995.85,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2331012.04,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 437,
         commissionJustified: 6,
         commissionMiss: 29,
         plenaryPresence: 208,
         plenaryJustified: 6,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 2
      }
   },
   204534: {
      voting: 54,
      gender: true,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 26,
      expenses: {
         parliamentaryQuotaExpense: 701287.41,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 1936914.03,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 432,
         commissionJustified: 11,
         commissionMiss: 53,
         plenaryPresence: 205,
         plenaryJustified: 8,
         plenaryMiss: 2,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 3
      }
   },
   204535: {
      voting: 16,
      gender: true,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 254,
      expenses: {
         parliamentaryQuotaExpense: 715381.84,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2499609.32,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 376,
         commissionJustified: 50,
         commissionMiss: 61,
         plenaryPresence: 208,
         plenaryJustified: 4,
         plenaryMiss: 3,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 5
      }
   },
   204536: {
      voting: 83,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 121,
      expenses: {
         parliamentaryQuotaExpense: 320446.57,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 1492825.72,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 581,
         commissionJustified: 12,
         commissionMiss: 98,
         plenaryPresence: 198,
         plenaryJustified: 6,
         plenaryMiss: 11,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 14
      }
   },
   204537: {
      voting: 74,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 162,
      expenses: {
         parliamentaryQuotaExpense: 669221.44,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2520268.42,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 299,
         commissionJustified: 14,
         commissionMiss: 47,
         plenaryPresence: 202,
         plenaryJustified: 12,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 1
      }
   },
   204538: {
      voting: 88,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 3,
      expenses: {
         parliamentaryQuotaExpense: 950295.32,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2542896.37,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 224,
         commissionJustified: 40,
         commissionMiss: 90,
         plenaryPresence: 181,
         plenaryJustified: 34,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 0
      }
   },
   204539: {
      voting: 88,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 0,
      expenses: {
         parliamentaryQuotaExpense: 0,
         parliamentaryQuotaPeriod: 0,
         cabinetExpense: 1118238.46,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 2340,
         commissionJustified: 10,
         commissionMiss: 32,
         plenaryPresence: 182,
         plenaryJustified: 19,
         plenaryMiss: 14,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 18
      }
   },
   204540: {
      voting: 90,
      gender: true,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 20,
      expenses: {
         parliamentaryQuotaExpense: 724626.01,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2535010.13,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 393,
         commissionJustified: 67,
         commissionMiss: 6,
         plenaryPresence: 213,
         plenaryJustified: 2,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 0
      }
   },
   204541: {
      voting: 45,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 54,
      expenses: {
         parliamentaryQuotaExpense: 884243.99,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2255166.98,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 462,
         commissionJustified: 14,
         commissionMiss: 69,
         plenaryPresence: 206,
         plenaryJustified: 8,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 1
      }
   },
   204542: {
      voting: 32,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 10,
      expenses: {
         parliamentaryQuotaExpense: 738349.28,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2251057.16,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 400,
         commissionJustified: 7,
         commissionMiss: 5,
         plenaryPresence: 210,
         plenaryJustified: 3,
         plenaryMiss: 2,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 2
      }
   },
   204544: {
      voting: 70,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 234,
      expenses: {
         parliamentaryQuotaExpense: 855244.92,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2302744.24,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 148,
         commissionJustified: 4,
         commissionMiss: 31,
         plenaryPresence: 198,
         plenaryJustified: 14,
         plenaryMiss: 3,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 3
      }
   },
   204545: {
      voting: 95,
      gender: true,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 17,
      expenses: {
         parliamentaryQuotaExpense: 694049.37,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 1711197.19,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 574,
         commissionJustified: 10,
         commissionMiss: 55,
         plenaryPresence: 205,
         plenaryJustified: 9,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 3
      }
   },
   204546: {
      voting: 85,
      gender: true,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 112,
      expenses: {
         parliamentaryQuotaExpense: 629617.87,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 1612018.18,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 133,
         commissionJustified: 15,
         commissionMiss: 8,
         plenaryPresence: 186,
         plenaryJustified: 28,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 6
      }
   },
   204547: {
      voting: 91,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 17,
      expenses: {
         parliamentaryQuotaExpense: 801909.77,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2511754.04,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 168,
         commissionJustified: 0,
         commissionMiss: 78,
         plenaryPresence: 197,
         plenaryJustified: 14,
         plenaryMiss: 4,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 9
      }
   },
   204548: {
      voting: 91,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 26,
      expenses: {
         parliamentaryQuotaExpense: 936354.53,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2507806.43,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 571,
         commissionJustified: 18,
         commissionMiss: 35,
         plenaryPresence: 204,
         plenaryJustified: 11,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 3
      }
   },
   204549: {
      voting: 91,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 3,
      expenses: {
         parliamentaryQuotaExpense: 981445.58,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2281368.49,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 242,
         commissionJustified: 9,
         commissionMiss: 47,
         plenaryPresence: 198,
         plenaryJustified: 8,
         plenaryMiss: 9,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 10
      }
   },
   204550: {
      voting: 91,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 10,
      expenses: {
         parliamentaryQuotaExpense: 930379.59,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2527477.19,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 285,
         commissionJustified: 21,
         commissionMiss: 88,
         plenaryPresence: 186,
         plenaryJustified: 23,
         plenaryMiss: 6,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 12
      }
   },
   204551: {
      voting: 87,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 0,
      expenses: {
         parliamentaryQuotaExpense: 765933.75,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2514558.56,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 141,
         commissionJustified: 2,
         commissionMiss: 25,
         plenaryPresence: 188,
         plenaryJustified: 6,
         plenaryMiss: 21,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 22
      }
   },
   204553: {
      voting: 49,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 111,
      expenses: {
         parliamentaryQuotaExpense: 481520.9,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2424296.91,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 263,
         commissionJustified: 3,
         commissionMiss: 63,
         plenaryPresence: 202,
         plenaryJustified: 5,
         plenaryMiss: 8,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 15
      }
   },
   204554: {
      voting: 90,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 1,
      expenses: {
         parliamentaryQuotaExpense: 895677.88,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2544196.19,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 148,
         commissionJustified: 5,
         commissionMiss: 26,
         plenaryPresence: 212,
         plenaryJustified: 2,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 4
      }
   },
   204555: {
      voting: 20,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 166,
      expenses: {
         parliamentaryQuotaExpense: 921936.71,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2557350.19,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 463,
         commissionJustified: 0,
         commissionMiss: 0,
         plenaryPresence: 211,
         plenaryJustified: 3,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 2
      }
   },
   204556: {
      voting: 92,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 221,
      expenses: {
         parliamentaryQuotaExpense: 1018417.46,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2508573.43,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 243,
         commissionJustified: 21,
         commissionMiss: 132,
         plenaryPresence: 212,
         plenaryJustified: 3,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 0
      }
   },
   204557: {
      voting: 89,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 47,
      expenses: {
         parliamentaryQuotaExpense: 1010805.95,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2466314.05,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 530,
         commissionJustified: 6,
         commissionMiss: 104,
         plenaryPresence: 215,
         plenaryJustified: 0,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 1
      }
   },
   204558: {
      voting: 30,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 90,
      expenses: {
         parliamentaryQuotaExpense: 852029.89,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2527123.98,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 196,
         commissionJustified: 1,
         commissionMiss: 29,
         plenaryPresence: 206,
         plenaryJustified: 3,
         plenaryMiss: 6,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 7
      }
   },
   204559: {
      voting: 22,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 141,
      expenses: {
         parliamentaryQuotaExpense: 861840.44,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2500352.65,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 368,
         commissionJustified: 2,
         commissionMiss: 21,
         plenaryPresence: 197,
         plenaryJustified: 12,
         plenaryMiss: 6,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 9
      }
   },
   204560: {
      voting: 90,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 10,
      expenses: {
         parliamentaryQuotaExpense: 674870.66,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2444743.92,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 219,
         commissionJustified: 8,
         commissionMiss: 90,
         plenaryPresence: 198,
         plenaryJustified: 10,
         plenaryMiss: 7,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 9
      }
   },
   204561: {
      voting: 28,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 218,
      expenses: {
         parliamentaryQuotaExpense: 532099.82,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2522882.46,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 380,
         commissionJustified: 15,
         commissionMiss: 97,
         plenaryPresence: 197,
         plenaryJustified: 17,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 1
      }
   },
   204562: {
      voting: 92,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 27,
      expenses: {
         parliamentaryQuotaExpense: 953071.84,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2480333.83,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 362,
         commissionJustified: 16,
         commissionMiss: 55,
         plenaryPresence: 199,
         plenaryJustified: 14,
         plenaryMiss: 2,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 3
      }
   },
   204563: {
      voting: 91,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 0,
      expenses: {
         parliamentaryQuotaExpense: 807539.29,
         parliamentaryQuotaPeriod: 20,
         cabinetExpense: 2532601.99,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 51,
         commissionJustified: 3,
         commissionMiss: 126,
         plenaryPresence: 140,
         plenaryJustified: 7,
         plenaryMiss: 20,
         ordemOfDayPresence: 233,
         ordemOfDayMiss: 27
      }
   },
   204564: {
      voting: 82,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 0,
      expenses: {
         parliamentaryQuotaExpense: 763360.53,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2493462.82,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 82,
         commissionJustified: 17,
         commissionMiss: 96,
         plenaryPresence: 165,
         plenaryJustified: 23,
         plenaryMiss: 27,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 48
      }
   },
   204565: {
      voting: 90,
      gender: true,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 14,
      expenses: {
         parliamentaryQuotaExpense: 625271.19,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2180987.85,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 340,
         commissionJustified: 8,
         commissionMiss: 5,
         plenaryPresence: 208,
         plenaryJustified: 7,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 6
      }
   },
   204566: {
      voting: 89,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 18,
      expenses: {
         parliamentaryQuotaExpense: 981630.1,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2559379.49,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 344,
         commissionJustified: 29,
         commissionMiss: 205,
         plenaryPresence: 198,
         plenaryJustified: 14,
         plenaryMiss: 3,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 9
      }
   },
   204567: {
      voting: 90,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 5,
      expenses: {
         parliamentaryQuotaExpense: 818691.89,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2478543.77,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 260,
         commissionJustified: 11,
         commissionMiss: 57,
         plenaryPresence: 199,
         plenaryJustified: 9,
         plenaryMiss: 7,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 10
      }
   },
   204569: {
      voting: 92,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 56,
      expenses: {
         parliamentaryQuotaExpense: 634558.09,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2487875.45,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 1491,
         commissionJustified: 29,
         commissionMiss: 39,
         plenaryPresence: 199,
         plenaryJustified: 16,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 0
      }
   },
   204570: {
      voting: 92,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 1,
      expenses: {
         parliamentaryQuotaExpense: 592551.63,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2497758.43,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 321,
         commissionJustified: 10,
         commissionMiss: 67,
         plenaryPresence: 190,
         plenaryJustified: 10,
         plenaryMiss: 15,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 24
      }
   },
   204571: {
      voting: 64,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 7,
      expenses: {
         parliamentaryQuotaExpense: 882304.19,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2482844.61,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 77,
         commissionJustified: 1,
         commissionMiss: 91,
         plenaryPresence: 201,
         plenaryJustified: 10,
         plenaryMiss: 4,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 7
      }
   },
   204572: {
      voting: 94,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 149,
      expenses: {
         parliamentaryQuotaExpense: 895568.7,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2456048.25,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 545,
         commissionJustified: 42,
         commissionMiss: 17,
         plenaryPresence: 196,
         plenaryJustified: 18,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 3
      }
   },
   204573: {
      voting: 78,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 38,
      expenses: {
         parliamentaryQuotaExpense: 698328.46,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2398226.86,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 291,
         commissionJustified: 0,
         commissionMiss: 21,
         plenaryPresence: 212,
         plenaryJustified: 3,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 3
      }
   },
   204574: {
      voting: 91,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 0,
      expenses: {
         parliamentaryQuotaExpense: 800193.88,
         parliamentaryQuotaPeriod: 20,
         cabinetExpense: 2521700.65,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 31,
         commissionJustified: 12,
         commissionMiss: 29,
         plenaryPresence: 141,
         plenaryJustified: 22,
         plenaryMiss: 22,
         ordemOfDayPresence: 250,
         ordemOfDayMiss: 34
      }
   },
   204575: {
      voting: 79,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 15,
      expenses: {
         parliamentaryQuotaExpense: 961698.43,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2521354.29,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 288,
         commissionJustified: 3,
         commissionMiss: 94,
         plenaryPresence: 204,
         plenaryJustified: 6,
         plenaryMiss: 5,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 7
      }
   },
   205476: {
      voting: 81,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 141,
      expenses: {
         parliamentaryQuotaExpense: 827044.06,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2538041.51,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 259,
         commissionJustified: 11,
         commissionMiss: 93,
         plenaryPresence: 206,
         plenaryJustified: 8,
         plenaryMiss: 1,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 2
      }
   },
   205548: {
      voting: 18,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 57,
      expenses: {
         parliamentaryQuotaExpense: 701844.61,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2361266.38,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 223,
         commissionJustified: 16,
         commissionMiss: 56,
         plenaryPresence: 185,
         plenaryJustified: 26,
         plenaryMiss: 4,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 11
      }
   },
   205550: {
      voting: 90,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 7,
      expenses: {
         parliamentaryQuotaExpense: 506965.43,
         parliamentaryQuotaPeriod: 24,
         cabinetExpense: 2192118.91,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 169,
         commissionJustified: 49,
         commissionMiss: 32,
         plenaryPresence: 182,
         plenaryJustified: 33,
         plenaryMiss: 0,
         ordemOfDayPresence: 289,
         ordemOfDayMiss: 1
      }
   },
   205863: {
      voting: 96,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
   },
   205865: {
      voting: 91,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 72,
      expenses: {
         parliamentaryQuotaExpense: 764844.78,
         parliamentaryQuotaPeriod: 22,
         cabinetExpense: 2171215.8,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 512,
         commissionJustified: 2,
         commissionMiss: 35,
         plenaryPresence: 178,
         plenaryJustified: 7,
         plenaryMiss: 0,
         ordemOfDayPresence: 248,
         ordemOfDayMiss: 1
      }
   },
   206231: {
      voting: 41,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 13,
      expenses: {
         parliamentaryQuotaExpense: 659154.59,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2503768.8,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 328,
         commissionJustified: 2,
         commissionMiss: 47,
         plenaryPresence: 206,
         plenaryJustified: 6,
         plenaryMiss: 2,
         ordemOfDayPresence: 287,
         ordemOfDayMiss: 6
      }
   },
   207176: {
      voting: 84,
      gender: true,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 4,
      expenses: {
         parliamentaryQuotaExpense: 493441.36,
         parliamentaryQuotaPeriod: 23,
         cabinetExpense: 2323960.69,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 415,
         commissionJustified: 9,
         commissionMiss: 14,
         plenaryPresence: 200,
         plenaryJustified: 10,
         plenaryMiss: 0,
         ordemOfDayPresence: 277,
         ordemOfDayMiss: 1
      }
   },
   209189: {
      voting: 22,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 147,
      expenses: {
         parliamentaryQuotaExpense: 837673.19,
         parliamentaryQuotaPeriod: 22,
         cabinetExpense: 2337871.29,
         cabinetPeriod: 23
      },
      presences: {
         commissionPresence: 182,
         commissionJustified: 1,
         commissionMiss: 85,
         plenaryPresence: 192,
         plenaryJustified: 4,
         plenaryMiss: 4,
         ordemOfDayPresence: 269,
         ordemOfDayMiss: 5
      }
   },
   213274: {
      voting: 55,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 34,
      expenses: {
         parliamentaryQuotaExpense: 307038.18,
         parliamentaryQuotaPeriod: 11,
         cabinetExpense: 639252.82,
         cabinetPeriod: 16
      },
      presences: {
         commissionPresence: 454,
         commissionJustified: 0,
         commissionMiss: 10,
         plenaryPresence: 81,
         plenaryJustified: 1,
         plenaryMiss: 0,
         ordemOfDayPresence: 109,
         ordemOfDayMiss: 0
      }
   },
   213762: {
      voting: 82,
      gender: true,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 3,
      expenses: {
         parliamentaryQuotaExpense: 194472.56,
         parliamentaryQuotaPeriod: 7,
         cabinetExpense: 674465.12,
         cabinetPeriod: 8
      },
      presences: {
         commissionPresence: 483,
         commissionJustified: 0,
         commissionMiss: 3,
         plenaryPresence: 50,
         plenaryJustified: 0,
         plenaryMiss: 0,
         ordemOfDayPresence: 71,
         ordemOfDayMiss: 0
      }
   },
   215042: {
      voting: 0,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 0,
      expenses: {
         parliamentaryQuotaExpense: 0,
         parliamentaryQuotaPeriod: 0,
         cabinetExpense: 0,
         cabinetPeriod: 3
      },
      presences: {
         commissionPresence: 78,
         commissionJustified: 0,
         commissionMiss: 25,
         plenaryPresence: 0,
         plenaryJustified: 0,
         plenaryMiss: 0,
         ordemOfDayPresence: 0,
         ordemOfDayMiss: 0
      }
   },
   215043: {
      voting: 0,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 0,
      expenses: {
         parliamentaryQuotaExpense: 0,
         parliamentaryQuotaPeriod: 0,
         cabinetExpense: 0,
         cabinetPeriod: 3
      },
      presences: {
         commissionPresence: 511,
         commissionJustified: 0,
         commissionMiss: 1,
         plenaryPresence: 0,
         plenaryJustified: 0,
         plenaryMiss: 0,
         ordemOfDayPresence: 0,
         ordemOfDayMiss: 0
      }
   },
   215044: {
      voting: 0,
      gender: true,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 0,
      expenses: {
         parliamentaryQuotaExpense: 0,
         parliamentaryQuotaPeriod: 0,
         cabinetExpense: 0,
         cabinetPeriod: 3
      },
      presences: {
         commissionPresence: 339,
         commissionJustified: 8,
         commissionMiss: 50,
         plenaryPresence: 0,
         plenaryJustified: 0,
         plenaryMiss: 0,
         ordemOfDayPresence: 0,
         ordemOfDayMiss: 0
      }
   },
   215045: {
      voting: 0,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 17,
      expenses: {
         parliamentaryQuotaExpense: 0,
         parliamentaryQuotaPeriod: 0,
         cabinetExpense: 0,
         cabinetPeriod: 3
      },
      presences: {
         commissionPresence: 73,
         commissionJustified: 3,
         commissionMiss: 11,
         plenaryPresence: 0,
         plenaryJustified: 0,
         plenaryMiss: 0,
         ordemOfDayPresence: 0,
         ordemOfDayMiss: 0
      }
   },
   216544: {
      voting: 0,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
   },
   217330: {
      voting: 0,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 0,
      expenses: {
         parliamentaryQuotaExpense: 0,
         parliamentaryQuotaPeriod: 0,
         cabinetExpense: 0,
         cabinetPeriod: 0
      },
      presences: {
         commissionPresence: 2,
         commissionJustified: 0,
         commissionMiss: 8,
         plenaryPresence: 0,
         plenaryJustified: 0,
         plenaryMiss: 0,
         ordemOfDayPresence: 0,
         ordemOfDayMiss: 0
      }
   },
   217480: {
      voting: 0,
      gender: false,
      legislature: {
         legislatures: [
            56
         ],
         length: 1
      },
      speech: 0,
      expenses: {
         parliamentaryQuotaExpense: 0,
         parliamentaryQuotaPeriod: 0,
         cabinetExpense: 0,
         cabinetPeriod: 0
      },
      presences: {
         commissionPresence: 26,
         commissionJustified: 0,
         commissionMiss: 5,
         plenaryPresence: 0,
         plenaryJustified: 0,
         plenaryMiss: 0,
         ordemOfDayPresence: 0,
         ordemOfDayMiss: 0
      }
   }
};