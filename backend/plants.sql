--
-- PostgreSQL database dump
--

-- Dumped from database version 14.18 (Homebrew)
-- Dumped by pg_dump version 14.18 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: plants; Type: TABLE; Schema: public; Owner: opol
--

CREATE TABLE public.plants (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    price numeric(10,2) NOT NULL,
    image_path text,
    description text,
    name_th character varying(100)
);


ALTER TABLE public.plants OWNER TO opol;

--
-- Name: plants_id_seq; Type: SEQUENCE; Schema: public; Owner: opol
--

CREATE SEQUENCE public.plants_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.plants_id_seq OWNER TO opol;

--
-- Name: plants_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: opol
--

ALTER SEQUENCE public.plants_id_seq OWNED BY public.plants.id;


--
-- Name: plants id; Type: DEFAULT; Schema: public; Owner: opol
--

ALTER TABLE ONLY public.plants ALTER COLUMN id SET DEFAULT nextval('public.plants_id_seq'::regclass);


--
-- Data for Name: plants; Type: TABLE DATA; Schema: public; Owner: opol
--

COPY public.plants (id, name, price, image_path, description, name_th) FROM stdin;
2	Ficus elastica	450.00	ficus.png	ยางอินเดีย (Ficus elastica) เป็นต้นไม้ตกแต่งยอดนิยม มีใบหนาเรียบ สีเขียวเข้มเป็นมัน ช่วยฟอกอากาศและดูดซับสารพิษ เช่น ฟอร์มัลดีไฮด์ เหมาะสำหรับวางในห้องนั่งเล่นหรือออฟฟิศ เพราะให้ความรู้สึกหรูหรา ดูแลง่าย ทนทานต่อสภาพแสงในร่ม ต้องการการรดน้ำน้อยและเติบโตช้า	ยางอินเดีย
1	Monstera deliciosa	550.00	monstera.png	มอนสเตอร่า (Monstera deliciosa) เป็นต้นไม้ยอดนิยมที่มีใบขนาดใหญ่ ฉลุสวยงามไม่เหมือนใคร ช่วยเพิ่มความชุ่มชื้นในอากาศและดูดซับสารพิษในบ้าน เหมาะสำหรับวางในห้องนั่งเล่นหรือมุมทำงาน ชอบแสงรำไร ไม่ต้องการแสงแดดโดยตรง และดูแลง่าย	มอนสเตอร่า
3	Sansevieria	290.00	sansevieria.png	ลิ้นมังกร (Sansevieria) เป็นต้นไม้ฟอกอากาศที่ขึ้นชื่อเรื่องความทนทาน ปล่อยออกซิเจนในเวลากลางคืน เหมาะกับห้องนอนหรือห้องทำงานที่มีอากาศถ่ายเทน้อย ใบเรียวยาว สีเขียวแซมเหลืองหรือขาว ดูแลรักษาง่ายมาก รดน้ำเพียงสัปดาห์ละครั้งก็เพียงพอ	ลิ้นมังกร
4	Epipremnum aureum	180.00	epipremnum.png	พลูด่าง (Epipremnum aureum) เป็นต้นไม้เลื้อยที่ได้รับความนิยมสูง ใบมีลายสีเขียว-เหลืองสวยงาม สามารถเลื้อยตามไม้พยุงหรือตั้งในกระถางแขวนได้ดี ช่วยดูดสารพิษในอากาศ และเติบโตเร็วแม้อยู่ในแสงรำไร ดูแลง่าย เหมาะกับผู้เริ่มต้น	พลูด่าง
5	Zamioculcas zamiifolia	390.00	zamioculcas.png	กวักมรกต (Zamioculcas zamiifolia) เป็นต้นไม้ฟอกอากาศยอดนิยมและเป็นต้นไม้มงคล ใบเขียวเข้มหนา เงางาม และแข็งแรงมาก ไม่ต้องการแสงแดดโดยตรง ทนแล้ง ดูแลรักษาง่าย เหมาะกับคนไม่มีเวลาดูแลบ้านหรือสำนักงาน วางไว้ตรงไหนก็ดูดี	กวักมรกต
7	Peace Lily	280.00	peace.png	เดหลี (Peace Lily) เป็นต้นไม้ประดับดอกสีขาวที่นิยมในบ้านและออฟฟิศ เพราะช่วยฟอกอากาศและกรองมลพิษในอากาศได้หลายชนิด เช่น เบนซีนและแอมโมเนีย ใบเขียวเข้มเงางาม ดอกสีขาวงามสง่า ชอบแสงสว่างรำไร ไม่ควรให้โดนแดดจัด รดน้ำให้ดินชื้นแต่ไม่แฉะ	เดหลี
8	Spider Plant	190.00	spider.png	เศรษฐีเรือนใน (Spider Plant) เป็นต้นไม้ฟอกอากาศยอดนิยมที่โตเร็วและดูแลง่าย ใบเรียวยาวมีลายสีเขียวขาวสวยงาม ช่วยดูดสารพิษในอากาศ เช่น คาร์บอนมอนอกไซด์และฟอร์มัลดีไฮด์ เหมาะกับห้องที่มีแสงธรรมชาติ รดน้ำสัปดาห์ละ 1–2 ครั้งก็เพียงพอ	เศรษฐีเรือนใน
9	Philodendron spp.	350.00	philodendron.png	ฟิโลเดนดรอน (Philodendron spp.) เป็นต้นไม้ใบสวยในตระกูลฟอกอากาศ ใบเขียวเข้มขนาดใหญ่ เพิ่มความรู้สึกสดชื่นและธรรมชาติในบ้าน ช่วยดูดสารพิษและเพิ่มความชื้นในอากาศได้ดี ชอบแสงรำไร ไม่ชอบแดดแรง โตได้ทั้งในดินและน้ำ เหมาะสำหรับวางมุมห้องหรือโต๊ะทำงาน	ฟิโลเดนดรอน เขียว
10	Philodendron Selloum	370.00	philodendron.png	ฟิโลเดนดรอน มะละกอ (Philodendron Selloum) มีลักษณะใบหยักขนาดใหญ่คล้ายใบมะละกอ สีเขียวสดใส ดูแลง่าย ช่วยดูดสารพิษในอากาศและเพิ่มความชุ่มชื้นให้กับบ้าน เหมาะสำหรับวางในห้องรับแขกหรือพื้นที่ที่ต้องการความเขียวขจี เติบโตดีในแสงรำไรและไม่ชอบน้ำมากเกินไป	ฟิโลเดนดรอน มะละกอ
12	Dieffenbachia	240.00	dieffenbachia.png	สาวน้อยประแป้ง (Dieffenbachia) เป็นต้นไม้ฟอกอากาศที่มีใบใหญ่ ลวดลายสีเขียวแซมขาวสวยงาม สร้างบรรยากาศสดชื่นในบ้าน โตเร็วและทนทาน ชอบแสงรำไร รดน้ำสม่ำเสมอ ระวังอย่าให้สัตว์เลี้ยงหรือเด็กสัมผัสน้ำยาง เพราะอาจระคายเคืองได้	สาวน้อยประแป้ง
13	Bird’s Nest Fern	270.00	bird.png	เฟิร์นข้าหลวง (Bird’s Nest Fern) เป็นต้นไม้ที่มีใบเรียงซ้อนคล้ายรังนก สีเขียวสด เพิ่มความชื้นในอากาศได้ดี เหมาะกับห้องน้ำหรือห้องที่มีอากาศแห้ง โตได้ในที่ร่มหรือแสงน้อย ต้องการความชื้นค่อนข้างสูง และควรรดน้ำตรงกลางของกอใบอย่างสม่ำเสมอ	เฟิร์นข้าหลวง
14	Bacopa monnieri	200.00	bacopa.png	พรมมิ (Bacopa monnieri) เป็นต้นไม้น้ำขนาดเล็ก ใบสีเขียวสด โตช้าแต่ทน ช่วยเพิ่มความชุ่มชื้นและความสดชื่นในบ้าน เป็นสมุนไพรที่มีสรรพคุณช่วยบำรุงสมองในทางแพทย์แผนไทย ปลูกง่ายได้ทั้งในน้ำหรือดินในที่แสงรำไร	พรมมิ
15	Fiddle Leaf Fig	520.00	fiddle.png	ไทรใบสัก (Fiddle Leaf Fig) เป็นต้นไม้ตกแต่งยอดฮิต ใบใหญ่รูปทรงคล้ายไวโอลิน สีเขียวเข้มเงางาม ให้ความรู้สึกหรูหรา ช่วยฟอกอากาศและดูดซับสารพิษได้ดี เหมาะกับวางในมุมห้องนั่งเล่นหรือพื้นที่โล่ง มีแสงธรรมชาติรำไร ดูแลไม่ยาก แต่ไม่ควรเปียกแฉะ	ไทรใบสัก
16	Dracaena fragrans	310.00	dracaena.png	วาสนา (Dracaena fragrans) เป็นต้นไม้ฟอกอากาศและต้นไม้มงคลที่เชื่อว่าช่วยเสริมโชคลาภ ใบเรียวยาวสีเขียวเข้ม ดูแลง่าย ทนต่อแสงในร่มและรดน้ำน้อย นิยมปลูกในบ้านและออฟฟิศ ช่วยกรองสารพิษจากอากาศ เช่น เบนซีน และฟอร์มัลดีไฮด์	วาสนา
17	Areca Palm	390.00	areca.png	หมากเหลือง (Areca Palm) เป็นต้นไม้ยอดนิยมในการตกแต่งภายใน ด้วยใบเรียวยาวที่พริ้วไหวสีเขียวสดใส ช่วยฟอกอากาศได้ดีโดยเฉพาะในห้องปิด และยังช่วยเพิ่มความชื้นในอากาศ โตเร็ว ชอบแสงรำไร ไม่ชอบแดดจัด รดน้ำเป็นประจำแต่ไม่ควรแฉะ นิยมวางในบ้านหรือออฟฟิศ	หมากเหลือง
18	Bamboo Palm	360.00	bamboo.png	ปาล์มไผ่ (Bamboo Palm) เป็นต้นไม้ประดับในร่มที่มีฟอร์มสวย ใบซ้อนเรียงคล้ายไผ่ ช่วยดูดสารพิษจากอากาศ เช่น เบนซีนและฟอร์มัลดีไฮด์ เพิ่มความชุ่มชื้นในห้อง เหมาะสำหรับวางในพื้นที่แสงรำไร ต้องการน้ำปานกลาง ดูแลง่าย และให้ความรู้สึกเขียวขจีแบบธรรมชาติ	ปาล์มไผ่
19	Syngonium podophyllum	220.00	syngonium.png	ออมเงิน (Syngonium podophyllum) เป็นต้นไม้มงคลขนาดเล็ก ใบมีลักษณะคล้ายหัวใจ สีเขียวหรือเขียวแซมขาว ฟอกอากาศได้ดี ปลูกง่ายในกระถางหรือในน้ำ โตเร็วและทนต่อแสงน้อย นิยมวางไว้บนโต๊ะทำงานเพื่อเสริมพลังบวกและความโชคดี	ออมเงิน
20	Aglaonema	280.00	aglaonema.png	เพชรยอดมงกุฎ (Aglaonema) เป็นต้นไม้ฟอกอากาศที่มีลวดลายใบสวยงาม หลากหลายสี เช่น เขียว แดง ชมพู ทนต่อแสงน้อยและรดน้ำน้อยได้ เหมาะกับการวางในห้องแอร์หรือพื้นที่ในร่ม ช่วยดูดซับสารพิษจากอากาศ นิยมในบ้านและออฟฟิศ	เพชรยอดมงกุฎ
21	Scindapsus pictus	250.00	scindapsus.png	ช้อนเงินช้อนทอง (Scindapsus pictus) เป็นต้นไม้เลื้อยใบลายสีเงิน-เขียวสวยงาม ดูแลง่ายมาก ทนต่อสภาพแสงน้อยและความชื้นต่ำ มีคุณสมบัติในการดูดซับสารพิษในอากาศ เหมาะสำหรับปลูกคลุมดิน แขวน หรือวางในกระถางตกแต่งพื้นที่ภายในบ้าน	ช้อนเงินช้อนทอง
6	Boston Fern	260.00	boston.png	เฟิร์นบอสตัน (Boston Fern) เป็นต้นไม้ใบดก สีเขียวสดและฟูฟ่อง มีลักษณะใบห้อยระย้าอย่างสวยงาม เหมาะสำหรับแขวนตกแต่งมุมบ้านหรือระเบียง มีคุณสมบัติช่วยเพิ่มความชื้นในอากาศและดูดซับสารพิษ เช่น ฟอร์มัลดีไฮด์ โตได้ดีในแสงรำไร ต้องการความชื้นสูง และควรรดน้ำสม่ำเสมอ	เฟิร์นบอสตัน
\.


--
-- Name: plants_id_seq; Type: SEQUENCE SET; Schema: public; Owner: opol
--

SELECT pg_catalog.setval('public.plants_id_seq', 26, true);


--
-- Name: plants plants_pkey; Type: CONSTRAINT; Schema: public; Owner: opol
--

ALTER TABLE ONLY public.plants
    ADD CONSTRAINT plants_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

