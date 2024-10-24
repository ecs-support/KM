var dataSet = [
  ["1", "1000", "รถขนาดเล็ก"],
  ["2", "1100", "กระบะบรรทุก"],
  ["3", "1101", "กระบะบรรทุก(พื้นเรียบ)"],
  ["4", "1102", "กระบะบรรทุก(ท้ายลาด)"],
  ["5", "1103", "กระบะบรรทุก(มีข้างเสริม)"],
  ["6", "1104", "กระบะบรรทุก(มีเครื่องทุ่นแรง)"],
  ["7", "1105", "กระบะบรรทุก(แบบยกได้)"],
  ["8", "1106", "กระบะบรรทุกมีข้างเสริมมีเครื่องทุ่นแรง"],
  ["9", "1107", "กระบะบรรทุกยกได้มีข้างเสริม"],
  ["10", "1108", "กระบะบรรทุกยกได้มีข้างเสริมมีเครื่องทุ่นแรง"],
  ["11", "1109", "กระบะบรรทุกวางตู้คอนเทนเนอร์"],
  ["12", "1110", "กระบะบรรทุกมีข้างเสริมมีหลังคา"],
  ["13", "1111", "กระบะบรรทุกท้ายลาดมีเครื่องทุ่นแรง"],
  ["14", "1112", "กระบะบรรทุก(ท้ายลาดมีข้างเสริมและติดตั้งเครื่องทุ่นแรง)"],
  ["15", "1113", "กระบะบรรทุกพื้นเรียบ (ติดตั้งเครื่องทุ่นแรง)"],
  ["16", "1114", "กระบะบรรทุกมีข้างเสริมมีหลังคามีเครื่องทุ่นแรง"],
  ["17", "1115", "กระบะบรรทุก (แบบยกได้มีเครื่องทุ่นแรง)"],
  ["18", "1200", "ตู้บรรทุก"],
  ["19", "1201", "ตู้บรรทุกมีเครื่องทุ่นแรง"],
  ["20", "1202", "ตู้บรรทุกเฉพาะกิจ"],
  ["21", "1203", "ตู้บรรทุกติดตั้งลิฟท์ขนถ่ายสินค้า"],
  ["22", "1204", "ตู้บรรทุกติดตั้งเครื่องทำความเย็น"],
  ["23", "1205", "ตู้บรรทุกติดตั้งเครื่องทำความเย็น, ลิฟท์ขนถ่ายสินค้า"],
  ["24", "1300", "บรรทุกของเหลว"],
  ["25", "1301", "บรรทุกของเหลว(น้ำนม)"],
  ["26", "1302", "บรรทุกของเหลว(น้ำมันพืช)"],
  ["27", "1303", "บรรทุกของเหลว(น้ำแข็ง)"],
  ["28", "1304", "บรรทุกของเหลว(น้ำเชื่อม/กากน้ำตาล/โมลาส)"],
  ["29", "1305", "บรรทุกของเหลว(น้ำยางพารา)"],
  ["30", "1306", "บรรทุกของเหลว(น้ำ)"],
  ["31", "1307", "บรรทุกของเหลว(คลอรีนเหลว)"],
  ["32", "1308", "บรรทุกของเหลว(กากกาแฟ พีบี.499)"],
  ["33", "1309", "บรรทุกของเหลว(เบียร์)"],
  ["34", "1310", "บรรทุกของเหลว(สารส้มน้ำ)"],
  ["35", "1311", "บรรทุกของเหลว(ยางมะตอยเหลว)"],
  ["36", "1312", "บรรทุกของเหลว(น้ำมันปาล์ม)"],
  ["37", "1313", "บรรทุกของเหลว(สูบสิ่งปฏิกูล)"],
  ["38", "1314", "บรรทุกของเหลว(กากน้ำตาล)"],
  ["39", "1315", "บรรทุกของเหลว(น้ำมันจากสัตว์)"],
  ["40", "1316", "บรรทุกของเหลว(พลาสติกเหลว)"],
  ["41", "1400", "บรรทุกวัตถุอันตราย"],
  ["42", "1401", "บรรทุกวัตถุอันตราย(น้ำมันพาราพิน)"],
  ["43", "1402", "บรรทุกวัตถุอันตราย(น้ำมันก๊าซ)"],
  ["44", "1403", "บรรทุกวัตถุอันตราย(น้ำมันหล่อลื่น)"],
  ["45", "1404", "บรรทุกวัตถุอันตราย(น้ำมันเตา)"],
  ["46", "1405", "บรรทุกวัตถุอันตราย(น้ำมันสน)"],
  ["47", "1406", "บรรทุกวัตถุอันตราย(น้ำมันดีเซล เบนซิน ก๊าซโซฮอล)"],
  [
    "48",
    "1407",
    "– ขอยกเลิก– ให้ใช้รหัส 1312 แทน – บรรทุกวัตถุอันตราย(น้ำมันปาล์ม)",
  ],
  ["49", "1408", "บรรทุกวัตถุอันตราย(คลอรินเต็ทพาราพิน)"],
  ["50", "1409", "บรรทุกวัตถุอันตราย(กำมะถันเหลว)"],
  ["51", "1410", "บรรทุกวัตถุอันตราย(กาวยูเรีย)"],
  ["52", "1411", "บรรทุกวัตถุอันตราย(คาร์บอนไดออกไซด์เหลว)"],
  ["53", "1412", "บรรทุกวัตถุอันตราย(ไนโตรเจนเหลว)"],
  ["54", "1413", "บรรทุกวัตถุอันตราย(อาร์กอนเหลว)"],
  ["55", "1414", "บรรทุกวัตถุอันตราย(อ๊อกซิเจนเหลว)"],
  ["56", "1415", "บรรทุกวัตถุอันตราย(ปิโตรเลียมเหลว(LPG))"],
  ["57", "1416", "บรรทุกวัตถุอันตราย(กรดกำมะถัน/กรดซัลฟลูลิค)"],
  ["58", "1417", "บรรทุกวัตถุอันตราย(กรดเกลือ/กรดไฮรโดรคลอลิค)"],
  ["59", "1418", "บรรทุกวัตถุอันตราย(โซเดียมซิลิเครท)"],
  ["60", "1419", "บรรทุกวัตถุอันตราย(โซดาไฟเหลว/โซเดียมไฮรดรอกไซด์)"],
  ["61", "1420", "บรรทุกวัตถุอันตราย(ไวราเนล)"],
  ["62", "1421", "บรรทุกวัตถุอันตราย(แอลกอฮอล์)"],
  ["63", "1422", "บรรทุกวัตถุอันตราย(สารเบนซีน ซี6 เอช6)"],
  ["64", "1423", "บรรทุกวัตถุอันตราย(เมทานอล)"],
  ["65", "1424", "บรรทุกวัตถุอันตราย(เอททิลอาซิเต็ต)"],
  ["66", "1425", "บรรทุกวัตถุอันตราย(เฮกเชน)"],
  ["67", "1426", "บรรทุกวัตถุอันตราย(รับเบอร์โซลเว้นท์)"],
  ["68", "1427", "บรรทุกวัตถุอันตราย(ยางมะตอยเหลว)"],
  ["69", "1428", "บรรทุกวัตถุอันตราย(ไฮโดเจนเปอร์อ็อกไซด์)"],
  ["70", "1429", "บรรทุกวัตถุอันตราย(สารติดเชื้อ/สารพิษ)"],
  ["71", "1430", "บรรทุกวัตถุอันตราย(CNG)"],
  ["72", "1431", "บรรทุกวัตถุอันตราย(ฟรีออนซ์)"],
  ["73", "1432", "บรรทุกวัตถุอันตราย(เอทานอล)"],
  ["74", "1433", "ยกเลิก – ให้ใช้รหัส 1406 แทน –"],
  ["75", "1434", "บรรทุกวัตถุอันตราย (สารละลายไฮรโดรคาร์บอนด์)"],
  ["76", "1435", "บรรทุกวัตถุอันตราย (วัตถุกัมมันตรังสี)"],
  ["77", "1436", "บรรทุกวัตถุอันตราย (ก๊าซไฮรโดรเจนเหลว)"],
  ["78", "1437", "บรรทุกวัตถุอันตราย (โซเดียมไฮโปคลอไลด์)"],
  ["79", "1438", "บรรทุกวัตถุอันตราย (กรดไนตริก)"],
  ["80", "1439", "บรรทุกวัตถุอันตราย (เฟอร์ริคคลอไรด์)"],
  ["81", "1440", "บรรทุกวัตถุอันตราย (แอมโมเนียเหลว)"],
  ["82", "1441", "บรรทุกวัตถุอันตราย (กรดโฟสโฟลิค (PHOSPHORIC))"],
  ["83", "1442", "บรรทุกวัตถุอันตราย (วัตถุระเบิด)"],
  ["84", "1443", "ยกเลิก–ให้ใช้รหัส 1439"],
  ["85", "1444", "บรรทุกวัตถุอันตราย (เรซิ่น)"],
  ["86", "1445", "บรรทุกวัตถุอันตราย(Purified Terephthalic Acid(PTA))"],
  ["87", "1446", "บรรทุกวัตถุอันตราย(สารหลอมเหลว)"],
  ["88", "1447", "บรรทุกวัตถุอันตราย(โลหะผงหรือฝุ่น)"],
  ["89", "1448", "บรรทุกวัตถุอันตราย(คลอรีนเหลว)"],
  ["90", "1449", "บรรทุกวัตถุอันตราย(เถ้าถ่านหิน)"],
  ["91", "1450", "บรรทุกวัตถุอันตราย(ก๊าซฮีเลียม)"],
  ["92", "1500", "บรรทุกเฉพาะกิจ"],
  ["93", "1501", "บรรทุกเฉพาะกิจ(พลาสติกเม็ด)"],
  ["94", "1502", "บรรทุกเฉพาะกิจ(น้ำตาลทราย)"],
  ["95", "1503", "บรรทุกเฉพาะกิจ(ซีเมนต์ผง)"],
  ["96", "1504", "บรรทุกเฉพาะกิจ(คอนกรีตผสมแห้ง)"],
  ["97", "1505", "บรรทุกเฉพาะกิจ(คอนกรีตผสมเหลว)"],
  ["98", "1506", "บรรทุกเฉพาะกิจ(ขยะแห้ง)"],
  ["99", "1507", "บรรทุกเฉพาะกิจ(ขยะเปียก)"],
  ["100", "1508", "บรรทุกเฉพาะกิจ(ข้าวสาลี)"],
  ["101", "1509", "บรรทุกเฉพาะกิจ(แป้ง)"],
  ["102", "1510", "บรรทุกเฉพาะกิจ(อาหารสัตว์)"],
  ["103", "1511", "บรรทุกเฉพาะกิจ(รถยก)"],
  ["104", "1512", "บรรทุกเฉพาะกิจ(ส่งรถจักรยานยนต์)"],
  ["105", "1513", "บรรทุกเฉพาะกิจ(บรรทุกขวดเครื่องดื่ม)"],
  ["106", "1514", "บรรทุกเฉพาะกิจ(รถสุขาเคลื่อนที่)"],
  ["107", "1515", "บรรทุกเฉพาะกิจ(ขนส่งกระจก)"],
  ["108", "1516", "บรรทุกเฉพาะกิจ(ATM เคลื่อนที่)"],
  ["109", "1517", "บรรทุกเฉพาะกิจ(ถ่ายทอดโทรทัศน์)"],
  ["110", "1518", "บรรทุกเฉพาะกิจ(บริการน้ำมันเคลื่อนที่)"],
  ["111", "1519", "บรรทุกเฉพาะกิจ(ส่งอาหาร)"],
  ["112", "1520", "บรรทุกเฉพาะกิจ(ทำความสะอาดถนน)"],
  ["113", "1521", "บรรทุกเฉพาะกิจ(บรรทุกปลาเป็ด)"],
  ["114", "1522", "บรรทุกเฉพาะกิจ(บรรทุกเครื่องทุ่นแรง)"],
  [
    "115",
    "1523",
    "– ขอยกเลิก 2/7/55 – ให้ใช้รัหัส 1427 แทน  –บรรทุกเฉพาะกิจ(บรรทุกยางมะตอยเหลว)",
  ],
  ["116", "1524", "บรรทุกเฉพาะกิจ(กำจัดสิ่งปฏิกูล)"],
  ["117", "1525", "บรรทุกเฉพาะกิจ(รถดับเพลิง)"],
  ["118", "1526", "บรรทุกเฉพาะกิจ(รถพยาบาล)"],
  ["119", "1527", "บรรทุกเฉพาะกิจ(ตู้คอนเทนเนอร์)"],
  ["120", "1528", "บรรทุกเฉพาะกิจ(ส่งรถยนต์)"],
  ["121", "1529", "บรรทุกเฉพาะกิจ(คอมพิวเตอร์เคลื่อนที่)"],
  ["122", "1530", "บรรทุกเฉพาะกิจ(บรรทุกไก่)"],
  ["123", "1531", "บรรทุกเฉพาะกิจ(รถกระเช้า)"],
  ["124", "1532", "บรรทุกเฉพาะกิจ(อุปกรณ์ตกแต่งบ้าน)"],
  ["125", "1533", "บรรทุกเฉพาะกิจ(รถเอ็กซ์เรย์)"],
  ["126", "1534", "บรรทุกเฉพาะกิจ(อุปกรณ์ซ่อมบำรุง)"],
  ["127", "1535", "บรรทุกเฉพาะกิจ(ห้องสมุด)"],
  ["128", "1536", "บรรทุกเฉพาะกิจ(เจาะน้ำบาดาล)"],
  ["129", "1537", "บรรทุกเฉพาะกิจ(ตอกเสาเข็ม)"],
  ["130", "1538", "บรรทุกเฉพาะกิจ(ห้องสุขา)"],
  ["131", "1539", "บรรทุกเฉพาะกิจ(บรรทุกม้า)"],
  ["132", "1540", "บรรทุกเฉพาะกิจ(ผงพลาสติก)"],
  ["133", "1541", "บรรทุกเฉพาะกิจ(ตู้น้ำแข็ง)"],
  ["134", "1542", "บรรทุกเฉพาะกิจ(บรรทุกรถยนต์)"],
  ["135", "1543", "บรรทุกเฉพาะกิจ(เครื่องปั่นไฟ)"],
  ["136", "1544", "บรรทุกเฉพาะกิจ(บรรทุกสุกร)"],
  ["137", "1545", "บรรทุกเฉพาะกิจ(รถเครน)"],
  ["138", "1546", "บรรทุกเฉพาะกิจ(แสดง/โฆษณาสินค้า)"],
  ["139", "1547", "บรรทุกเฉพาะกิจ(บรรทุกกระบะขยะมูลฝอย)"],
  ["140", "1548", "บรรทุกเฉพาะกิจ(ติดตั้งเครื่องสูบส่งคอนกรีต)"],
  ["141", "1549", "บรรทุกเฉพาะกิจ(ผ้าใบปิดข้าง)"],
  ["142", "1550", "บรรทุกเฉพาะกิจ(เครื่องจักรลาดยางมะตอย)"],
  ["143", "1551", "บรรทุกเฉพาะกิจ(ขนส่งรถยนต์ติดตั้งเครื่องทุ่นแรง)"],
  ["144", "1552", "บรรทุกเฉพาะกิจ(เจาะปักเสาไฟฟ้า)"],
  ["145", "1553", "บรรทุกเฉพาะกิจ(ถ่ายทอดสัญญานโทรศัพท์์)"],
  ["146", "1554", "บรรทุกเฉพาะกิจ(รถบ้าน)"],
  ["147", "1600", "พ่วง"],
  ["148", "1601", "พ่วง 2 เพลา"],
  ["149", "1602", "พ่วง 1 เพลา"],
  ["150", "1603", "รถพ่วง(พื้นเรียบ)"],
  ["151", "1604", "รถพ่วง(มีข้างเสริม)"],
  ["152", "1605", "รถพ่วง(มีเครื่องทุ่นแรง)"],
  ["153", "1606", "รถพ่วง(แบบยกได้)"],
  ["154", "1607", "รถพ่วงบรรทุกน้ำนม"],
  ["155", "1608", "รถพ่วงบรรทุกน้ำมันพืช"],
  ["156", "1609", "รถพ่วงบรรทุกน้ำเชื่อม/กากน้ำตาล/โมลาส"],
  ["157", "1610", "รถพ่วงบรรทุกน้ำยางพารา"],
  ["158", "1611", "รถพ่วงบรรทุกน้ำ"],
  ["159", "1612", "รถพ่วงบรรทุกคลอรีนเหลว"],
  ["160", "1613", "รถพ่วงบรรทุกกากกาแฟ พีบี.499"],
  ["161", "1614", "รถพ่วงบรรทุกเบียร์"],
  ["162", "1615", "รถพ่วงบรรทุกสารส้มน้ำ"],
  ["163", "1616", "รถพ่วงบรรทุกยางมะตอยเหลว"],
  ["164", "1617", "รถพ่วงบรรทุกน้ำมันพาราฟิน"],
  ["165", "1618", "รถพ่วงบรรทุกน้ำมันก๊าซ"],
  ["166", "1619", "รถพ่วงบรรทุกน้ำมันหล่อลื่น"],
  ["167", "1620", "รถพ่วงบรรทุกน้ำมันเตา"],
  ["168", "1621", "รถพ่วงบรรทุกน้ำมันสน"],
  ["169", "1622", "รถพ่วงบรรทุกน้ำมันดีเซล"],
  ["170", "1623", "รถพ่วงบรรทุกน้ำมันปาล์ม"],
  ["171", "1624", "รถพ่วงบรรทุกคลอรีนเด็ทพาราฟิน"],
  ["172", "1625", "รถพ่วงบรรทุกกำมะถันเหลว"],
  ["173", "1626", "รถพ่วงบรรทุกกาวยูเรีย"],
  ["174", "1627", "รถพ่วงบรรทุกคาร์บอนไดออกไซด์เหลว"],
  ["175", "1628", "รถพ่วงบรรทุกไนโตรเจนเหลว"],
  ["176", "1629", "รถพ่วงบรรทุกอาร์กอนเหลว"],
  ["177", "1630", "รถพ่วงบรรทุกอ๊อกซิเจนเหลว"],
  ["178", "1631", "รถพ่วงบรรทุกกรดกำมะถัน"],
  ["179", "1632", "รถพ่วงบรรทุกกรดเกลือ"],
  ["180", "1633", "รถพ่วงบรรทุกโซเดียมซิลิเครท"],
  ["181", "1634", "รถพ่วงบรรทุกโซดาไฟเหลว"],
  ["182", "1635", "รถพ่วงบรรทุกไวราเนล"],
  ["183", "1636", "รถพ่วงบรรทุกแอลกอฮอล์"],
  ["184", "1637", "รถพ่วงบรรทุกสารเบนซีน ซี 6 เอช 6"],
  ["185", "1638", "รถพ่วงบรรทุกเมทานอล"],
  ["186", "1639", "รถพ่วงบรรทุกเอททิลอาซิเด็ด"],
  ["187", "1640", "รถพ่วงบรรทุกเฮกเซน"],
  ["188", "1641", "รถพ่วงบรรทุกรับเบอร์โซลเว้นท์"],
  ["189", "1642", "รถพ่วงบรรทุกน้ำตาลทราย"],
  ["190", "1643", "รถพ่วงบรรทุกซีเมนต์ผง"],
  ["191", "1644", "รถพ่วงบรรทุกข้าวสาลี"],
  ["192", "1645", "รถพ่วงบรรทุกแป้ง"],
  ["193", "1646", "รถพ่วงบรรทุกอาหารสัตว์"],
  ["194", "1647", "รถพ่วงบรรทุกยางมะตอยเหลว"],
  ["195", "1648", "รถพ่วงบรรทุกวัตถุอันตราย"],
  ["196", "1649", "รถพ่วงบรรทุกเครื่องมือสื่อสาร"],
  ["197", "1650", "รถพ่วงบรรทุกเถ้าถ่านหิน"],
  ["198", "1651", "รถพ่วงบรรทุกรถยนต์"],
  ["199", "1652", "รถพ่วงบรรทุกขวดเครื่องดื่ม"],
  ["200", "1653", "รถพ่วงบรรทุกไก่"],
  ["201", "1654", "รถพ่วงบรรทุกสุกร"],
  ["202", "1655", "รถพ่วง ตู้บรรทุก(ตู้เย็น)"],
  ["203", "1656", "รถพ่วง ตู้บรรทุก(ตู้แห้ง)"],
  ["204", "1657", "รถพ่วง (บรรทุกกระบะขยะมูลฝอย)"],
  ["205", "1658", "รถพ่วง แบบยกเทได้มีข้างเสริม"],
  ["206", "1659", "รถพ่วง ผ้าใบปิดข้าง"],
  ["207", "1660", "รถพ่วงบรรทุกตู้คอนเทรนเนอร์"],
  ["208", "1661", "รถพ่วง (ตู้แห้งมีเครื่องทุ่นแรงด้านท้าย)"],
  ["209", "1700", "กึ่งพ่วง"],
  ["210", "1701", "รถกึ่งพ่วง(แบบยกได้)"],
  ["211", "1702", "รถกึ่งพ่วง(มีข้างเสริม)"],
  ["212", "1703", "รถกึ่งพ่วง(ท้ายลาด)"],
  ["213", "1704", "รถกึ่งพ่วง(พื้นเรียบ)"],
  ["214", "1705", "รถกึ่งพ่วงบรรทุกปิโตรเลียมเหลว(LPG)"],
  ["215", "1706", "รถกึ่งพ่วงบรรทุกตู้คอนเทนเนอร์"],
  ["216", "1707", "รถกึ่งพ่วงบรรทุกยางมะตอยเหลว"],
  ["217", "1708", "รถกึ่งพ่วงบรรทุกรับเบอร์โซลเว้นท์"],
  ["218", "1709", "รถกึ่งพ่วงบรรทุกสารส้มน้ำ"],
  ["219", "1710", "รถกึ่งพ่วงบรรทุกเอททิลอาซิเด็ด"],
  ["220", "1711", "รถกึ่งพ่วงบรรทุกเมทานอล"],
  ["221", "1712", "รถกึ่งพ่วงบรรทุกเบียร์"],
  ["222", "1713", "รถกึ่งพ่วงบรรทุกสารเบนซีน ซี 6 เอช 6"],
  ["223", "1714", "รถกึ่งพ่วงบรรทุกอ๊อกซิเจนเหลว"],
  ["224", "1715", "รถกึ่งพ่วงบรรทุกอาร์กอนเหลว"],
  ["225", "1716", "รถกึ่งพ่วงบรรทุกอาหารสัตว์"],
  ["226", "1717", "รถกึ่งพ่วงบรรทุกแป้ง"],
  ["227", "1718", "รถกึ่งพ่วงบรรทุกแอลกอฮอล์"],
  ["228", "1719", "รถกึ่งพ่วงบรรทุกไวราเนล"],
  ["229", "1720", "รถกึ่งพ่วงบรรทุกโซดาไฟเหลว/โซเดียมไฮรดรอกไซด์"],
  ["230", "1721", "รถกึ่งพ่วงบรรทุกโซเดียมซิลิเครท"],
  ["231", "1722", "รถกึ่งพ่วงบรรทุกไนโตรเจนเหลว"],
  ["232", "1723", "รถกึ่งพ่วงบรรทุกกรดเกลือ/ไฮโดรคลอลิค"],
  ["233", "1724", "รถกึ่งพ่วงบรรทุกกรดกำมะถัน/กรดซัลฟลูลิค"],
  ["234", "1725", "รถกึ่งพ่วงบรรทุกกาวยูเรีย"],
  ["235", "1726", "รถกึ่งพ่วงบรรทุกกากกาแฟ พีบี.499"],
  ["236", "1727", "รถกึ่งพ่วงบรรทุกกำมะถันเหลว"],
  ["237", "1728", "รถกึ่งพ่วงบรรทุกข้าวสาลี"],
  ["238", "1729", "รถกึ่งพ่วงบรรทุกคลอรีนเด็ทพาราฟิน"],
  ["239", "1730", "รถกึ่งพ่วงบรรทุกคลอรีนเหลว"],
  ["240", "1731", "รถกึ่งพ่วงบรรทุกคาร์บอนไดออกไซด์เหลว"],
  ["241", "1732", "รถกึ่งพ่วงบรรทุกน้ำ"],
  ["242", "1733", "รถกึ่งพ่วงบรรทุกน้ำตาลทราย"],
  ["243", "1734", "รถกึ่งพ่วงบรรทุกน้ำยางพารา"],
  ["244", "1735", "รถกึ่งพ่วง(บรรทุกน้ำเชื่อม/กากน้ำตาล/โมลาส)"],
  ["245", "1736", "รถกึ่งพ่วงบรรทุกน้ำแข็ง"],
  ["246", "1737", "รถกึ่งพ่วงบรรทุกน้ำมันปาล์ม"],
  ["247", "1738", "รถกึ่งพ่วงบรรทุกน้ำมันดีเซล เบนซิน ก๊าซโซฮอล"],
  ["248", "1739", "รถกึ่งพ่วงบรรทุกน้ำมันสน"],
  ["249", "1740", "รถกึ่งพ่วงบรรทุกน้ำมันเตา"],
  ["250", "1741", "รถกึ่งพ่วงบรรทุกน้ำมันหล่อลื่น"],
  ["251", "1742", "รถกึ่งพ่วงบรรทุกน้ำมันก๊าซ"],
  ["252", "1743", "รถกึ่งพ่วงบรรทุกน้ำมันพาราฟิน"],
  ["253", "1744", "รถกึ่งพ่วงบรรทุกน้ำมันพืช"],
  ["254", "1745", "รถกึ่งพ่วงบรรทุกน้ำนม"],
  ["255", "1746", "รถกึ่งพ่วงบรรทุกไฮโดเจนเปอร์อ๊อกไซด์"],
  ["256", "1747", "รถกึ่งพวงบรรทุกรถยนต์"],
  ["257", "1748", "รถกึ่งพ่วงบรรทุกวัตถุอันตราย"],
  ["258", "1749", "รถกึ่งพวงบรรทุกซีเมนต์ผง"],
  ["259", "1750", "รถกึ่งพ่วงบรรทุกก๊าซ CNG"],
  ["260", "1751", "รถกึ่งพ่วงบรรทุกเถ้าถ่านหิน"],
  ["261", "1752", "รถกึ่งพ่วงบรรทุกขวดเครื่องดื่ม"],
  ["262", "1753", "รถกึ่งพ่วงบรรทุกรถจักรยานยนต์"],
  ["263", "1754", "รถกึ่งพ่วงบรรทุกไก่"],
  ["264", "1755", "รถกึ่งพ่วงบรรทุกสุกร"],
  ["265", "1756", "รถกึ่งพ่วง ตู้บรรทุก"],
  ["266", "1757", "รถกึ่งพ่วงเฉพาะกิจ"],
  ["267", "1758", "รถกึ่งพ่วงบรรทุก Purified Terephthalic Acid (PTA)"],
  ["268", "1759", "รถกึ่งพ่วง B-DOUBLE"],
  ["269", "1760", "รถกึ่งพ่วง (แบบยกได้มีข้างเสริม)"],
  ["270", "1761", "รถกึ่งพ่วงผ้าใบปิดข้าง"],
  ["271", "1762", "รถกึ่งพ่วงตู้บรรทุกติดตั้งเครื่องทำความเย็น"],
  ["272", "1763", "รถกึ่งพ่วงตู้บรรทุกติดตั้งลิฟท์ขนถ่ายสินค้า"],
  [
    "273",
    "1764",
    "รถกึ่งพ่วงตู้บรรทุกติดตั้งเครื่องทำความเย็นและลิฟท์ขนถ่ายสินค้า",
  ],
  ["274", "1765", "– ขอยกเลิก – ให้ใช้รหัส 1738 แทน –"],
  ["275", "1766", "– ขอยกเลิก – ให้ใช้รหัส 1724 แทน –"],
  ["276", "1767", "รถกึ่งพ่วงบรรทุกเฮกเซน"],
  ["277", "1768", "รถกึ่งพ่วงบรรทุกเอทานอล"],
  ["278", "1769", "– ขอยกเลิก – ให้ใช้รหัส 1738 แทน –"],
  ["279", "1770", "รถกึ่งพ่วงบรรทุกกรดไนตริก"],
  ["280", "1771", "รถกึ่งพ่วงบรรทุกกรดโฟสโฟลิค (PHOSPHORIC)"],
  ["281", "1772", "รถกึ่งพ่วงบรรทุกก๊าซไฮรโดรเจนเหลว"],
  ["282", "1773", "รถกึ่งพ่วงบรรทุกโซเดียมไฮโปคลอไลด์"],
  ["283", "1774", "รถกึ่งพ่วงบรรทุกเฟอร์ริคคลอไรด์"],
  ["284", "1775", "รถกึ่งพ่วงบรรทุกเรซิ่น"],
  ["285", "1776", "รถกึ่งพ่วงบรรทุกวัตถุกัมมันตรังสี"],
  ["286", "1777", "รถกึ่งพ่วงบรรทุกวัตถุระเบิด"],
  ["287", "1778", "รถกึ่งพ่วงบรรทุกสารละลายไฮรโดรคาร์บอนด์"],
  ["288", "1779", "รถกึ่งพ่วงบรรทุกแอมโมเนียเหลว"],
  ["289", "1780", "รถกึ่งพ่วงบรรทุกฟรีออนซ์"],
  ["290", "1781", "รถกึ่งพ่วงบรรทุกสารหลอมเหลว"],
  ["291", "1782", "รถกึ่งพ่วงบรรทุกโลหะผงหรือฝุ่น"],
  ["292", "1783", "รถกึ่งพ่วงบรรทุกสารติดเชื้อ/สารพิษ"],
  ["293", "1784", "รถกึ่งพ่วงบรรทุกก๊าซฮีเลียม"],
  ["294", "1785", "รถกึ่งพ่วงบรรทุกตู้คอนเทนเนอร์ติดตั้งลิฟท์ขนถ่ายสินค้า"],
  ["295", "1786", "รถกึ่งพ่วงบรรทุกตู้สินค้ายกเท"],
  ["296", "1800", "กึ่งพ่วงบรรทุกวัสดุยาว"],
  ["297", "1900", "ลากจูง"],
  ["298", "1901", "ลากจูง(มีเครื่องทุ่นแรง)"],
  ["299", "1902", "ลากจูง(มีเครื่องกำเนิดไฟฟ้า)"],
  ["300", "1903", "ลากจูง(วัตถุอันตราย)"],
];
$(document).ready(function () {
  $("#table-ref").DataTable({
    data: dataSet,
    columns: [
      { title: "ลำดับ", className: "txt-center" },
      { title: "รหัสประเภทรถ", className: "txt-center" },
      { title: "ประเภทรถ"},
    
    ],
    responsive: true,
    scroller: true,
    
    
  });

  
});

