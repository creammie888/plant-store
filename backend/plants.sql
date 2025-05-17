--
-- PostgreSQL database dump
--

-- Dumped from database version 14.18 (Debian 14.18-1.pgdg120+1)
-- Dumped by pg_dump version 14.18 (Debian 14.18-1.pgdg120+1)

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
-- Name: order_items; Type: TABLE; Schema: public; Owner: opol
--

CREATE TABLE public.order_items (
    id integer NOT NULL,
    order_id integer,
    plant_id integer,
    quantity integer,
    price_each numeric(10,2),
    item_price numeric(10,2)
);


ALTER TABLE public.order_items OWNER TO opol;

--
-- Name: order_items_id_seq; Type: SEQUENCE; Schema: public; Owner: opol
--

CREATE SEQUENCE public.order_items_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.order_items_id_seq OWNER TO opol;

--
-- Name: order_items_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: opol
--

ALTER SEQUENCE public.order_items_id_seq OWNED BY public.order_items.id;


--
-- Name: orders; Type: TABLE; Schema: public; Owner: opol
--

CREATE TABLE public.orders (
    id integer NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    customer_name character varying(100),
    customer_address text,
    payment_method character varying(50)
);


ALTER TABLE public.orders OWNER TO opol;

--
-- Name: orders_id_seq; Type: SEQUENCE; Schema: public; Owner: opol
--

CREATE SEQUENCE public.orders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.orders_id_seq OWNER TO opol;

--
-- Name: orders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: opol
--

ALTER SEQUENCE public.orders_id_seq OWNED BY public.orders.id;


--
-- Name: plants; Type: TABLE; Schema: public; Owner: opol
--

CREATE TABLE public.plants (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    price numeric(10,2) NOT NULL,
    image_path text,
    description text,
    name_th character varying(100),
    sunlight character varying(255),
    water character varying(255),
    care_tip text
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
-- Name: order_items id; Type: DEFAULT; Schema: public; Owner: opol
--

ALTER TABLE ONLY public.order_items ALTER COLUMN id SET DEFAULT nextval('public.order_items_id_seq'::regclass);


--
-- Name: orders id; Type: DEFAULT; Schema: public; Owner: opol
--

ALTER TABLE ONLY public.orders ALTER COLUMN id SET DEFAULT nextval('public.orders_id_seq'::regclass);


--
-- Name: plants id; Type: DEFAULT; Schema: public; Owner: opol
--

ALTER TABLE ONLY public.plants ALTER COLUMN id SET DEFAULT nextval('public.plants_id_seq'::regclass);


--
-- Data for Name: order_items; Type: TABLE DATA; Schema: public; Owner: opol
--

COPY public.order_items (id, order_id, plant_id, quantity, price_each, item_price) FROM stdin;
4	3	2	2	\N	450.00
5	4	1	1	\N	550.00
6	5	6	1	\N	260.00
7	5	8	1	\N	190.00
8	5	12	1	\N	240.00
9	6	3	1	\N	290.00
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: opol
--

COPY public.orders (id, created_at, customer_name, customer_address, payment_method) FROM stdin;
3	2025-05-16 14:56:47.343421	รร	ำำำำ, ห/ำ_ก, ๆๆๆ, /ำก/ำก	
4	2025-05-16 15:35:47.835546	op	popo, ooo, op, ssss	
5	2025-05-16 15:37:00.461297	qqqq	qqqq, qqq, qqqq, qqqq	
6	2025-05-16 15:39:29.090796	หหห	หหห, หหหห, หหห, หหห	
\.


--
-- Data for Name: plants; Type: TABLE DATA; Schema: public; Owner: opol
--

COPY public.plants (id, name, price, image_path, description, name_th, sunlight, water, care_tip) FROM stdin;
4	Epipremnum aureum	180.00	epipremnum.png	พลูด่าง (Epipremnum aureum) เป็นต้นไม้เลื้อยที่ได้รับความนิยมสูง ใบมีลายสีเขียว-เหลืองสวยงาม สามารถเลื้อยตามไม้พยุงหรือตั้งในกระถางแขวนได้ดี ช่วยดูดสารพิษในอากาศ และเติบโตเร็วแม้อยู่ในแสงรำไร ดูแลง่าย เหมาะกับผู้เริ่มต้น	พลูด่าง	2	2	พลูด่าง เลื้อยได้ดีในแสงรำไร ดูแลง่าย เหมาะกับผู้เริ่มต้น
8	Spider Plant	190.00	spider.png	เศรษฐีเรือนใน (Spider Plant) เป็นต้นไม้ฟอกอากาศยอดนิยมที่โตเร็วและดูแลง่าย ใบเรียวยาวมีลายสีเขียวขาวสวยงาม ช่วยดูดสารพิษในอากาศ เช่น คาร์บอนมอนอกไซด์และฟอร์มัลดีไฮด์ เหมาะกับห้องที่มีแสงธรรมชาติ รดน้ำสัปดาห์ละ 1–2 ครั้งก็เพียงพอ	เศรษฐีเรือนใน	3	2	เศรษฐีเรือนใน โตเร็ว ดูแลง่าย เหมาะกับห้องที่มีแสงธรรมชาติ
9	Philodendron spp.	350.00	philodendron.png	ฟิโลเดนดรอน (Philodendron spp.) เป็นต้นไม้ใบสวยในตระกูลฟอกอากาศ ใบเขียวเข้มขนาดใหญ่ เพิ่มความรู้สึกสดชื่นและธรรมชาติในบ้าน ช่วยดูดสารพิษและเพิ่มความชื้นในอากาศได้ดี ชอบแสงรำไร ไม่ชอบแดดแรง โตได้ทั้งในดินและน้ำ เหมาะสำหรับวางมุมห้องหรือโต๊ะทำงาน	ฟิโลเดนดรอน เขียว	2	2	ฟิโลเดนดรอน ใบสวย ชอบแสงรำไร ไม่ชอบแดดแรง เหมาะวางมุมห้อง
10	Philodendron Selloum	370.00	selloum.png	ฟิโลเดนดรอน มะละกอ (Philodendron Selloum) มีลักษณะใบหยักขนาดใหญ่คล้ายใบมะละกอ สีเขียวสดใส ดูแลง่าย ช่วยดูดสารพิษในอากาศและเพิ่มความชุ่มชื้นให้กับบ้าน เหมาะสำหรับวางในห้องรับแขกหรือพื้นที่ที่ต้องการความเขียวขจี เติบโตดีในแสงรำไรและไม่ชอบน้ำมากเกินไป	ฟิโลเดนดรอน มะละกอ	2	2	ฟิโลเดนดรอน มะละกอ ใบหยัก ดูแลง่าย เหมาะวางในห้องรับแขก
12	Dieffenbachia	240.00	dieffenbachia.png	สาวน้อยประแป้ง (Dieffenbachia) เป็นต้นไม้ฟอกอากาศที่มีใบใหญ่ ลวดลายสีเขียวแซมขาวสวยงาม สร้างบรรยากาศสดชื่นในบ้าน โตเร็วและทนทาน ชอบแสงรำไร รดน้ำสม่ำเสมอ ระวังอย่าให้สัตว์เลี้ยงหรือเด็กสัมผัสน้ำยาง เพราะอาจระคายเคืองได้	สาวน้อยประแป้ง	2	2	สาวน้อยประแป้ง ใบใหญ่ ลวดลายสวย โตเร็ว ทนทาน รดน้ำสม่ำเสมอ ระวังอย่าให้สัตว์เลี้ยงหรือเด็กสัมผัสน้ำยาง
7	Peace Lily	280.00	peace.png	เดหลี (Peace Lily) เป็นต้นไม้ประดับดอกสีขาวที่นิยมในบ้านและออฟฟิศ เพราะช่วยฟอกอากาศและกรองมลพิษในอากาศได้หลายชนิด เช่น เบนซีนและแอมโมเนีย ใบเขียวเข้มเงางาม ดอกสีขาวงามสง่า ชอบแสงสว่างรำไร ไม่ควรให้โดนแดดจัด รดน้ำให้ดินชื้นแต่ไม่แฉะ	เดหลี	3	2	เดหลี ดอกสีขาวงามสง่า ชอบแสงรำไร ไม่ควรโดนแดดจัด
14	Bacopa monnieri	200.00	bacopa.png	พรมมิ (Bacopa monnieri) เป็นต้นไม้น้ำขนาดเล็ก ใบสีเขียวสด โตช้าแต่ทน ช่วยเพิ่มความชุ่มชื้นและความสดชื่นในบ้าน เป็นสมุนไพรที่มีสรรพคุณช่วยบำรุงสมองในทางแพทย์แผนไทย ปลูกง่ายได้ทั้งในน้ำหรือดินในที่แสงรำไร	พรมมิ	2	2	พรมมิ ใบเขียวสด โตช้าแต่ทน ปลูกง่ายทั้งน้ำและดิน
17	Areca Palm	390.00	areca.png	หมากเหลือง (Areca Palm) เป็นต้นไม้ยอดนิยมในการตกแต่งภายใน ด้วยใบเรียวยาวที่พริ้วไหวสีเขียวสดใส ช่วยฟอกอากาศได้ดีโดยเฉพาะในห้องปิด และยังช่วยเพิ่มความชื้นในอากาศ โตเร็ว ชอบแสงรำไร ไม่ชอบแดดจัด รดน้ำเป็นประจำแต่ไม่ควรแฉะ นิยมวางในบ้านหรือออฟฟิศ	หมากเหลือง	3	2	ใบเรียวยาวสีเขียวสดพริ้วไหว ดูแลง่าย ไม่ชอบแสงแดดจัด รดน้ำสม่ำเสมอแต่ไม่ให้ดินแฉะ ปลูกในที่ที่มีอากาศถ่ายเทดี
20	Aglaonema	280.00	aglaonema.png	เพชรยอดมงกุฎ (Aglaonema) เป็นต้นไม้ฟอกอากาศที่มีลวดลายใบสวยงาม หลากหลายสี เช่น เขียว แดง ชมพู ทนต่อแสงน้อยและรดน้ำน้อยได้ เหมาะกับการวางในห้องแอร์หรือพื้นที่ในร่ม ช่วยดูดซับสารพิษจากอากาศ นิยมในบ้านและออฟฟิศ	เพชรยอดมงกุฎ	2	2	ไม้ใบที่ทนทานต่อแสงน้อยและรดน้ำไม่บ่อย ใบมีลวดลายสวยงาม ควรวางในที่ร่มหรือแสงรำไร และไม่ควรให้น้ำแฉะเกินไปเพื่อป้องกันโรครากเน่า
13	Bird’s Nest Fern	270.00	bird.png	เฟิร์นข้าหลวง (Bird’s Nest Fern) เป็นต้นไม้ที่มีใบเรียงซ้อนคล้ายรังนก สีเขียวสด เพิ่มความชื้นในอากาศได้ดี เหมาะกับห้องน้ำหรือห้องที่มีอากาศแห้ง โตได้ในที่ร่มหรือแสงน้อย ต้องการความชื้นค่อนข้างสูง และควรรดน้ำตรงกลางของกอใบอย่างสม่ำเสมอ	เฟิร์นข้าหลวง	2	3	เฟิร์นข้าหลวง ใบเรียงซ้อนคล้ายรังนก เหมาะกับห้องน้ำหรือที่อากาศแห้ง
15	Fiddle Leaf Fig	520.00	fiddle.png	ไทรใบสัก (Fiddle Leaf Fig) เป็นต้นไม้ตกแต่งยอดฮิต ใบใหญ่รูปทรงคล้ายไวโอลิน สีเขียวเข้มเงางาม ให้ความรู้สึกหรูหรา ช่วยฟอกอากาศและดูดซับสารพิษได้ดี เหมาะกับวางในมุมห้องนั่งเล่นหรือพื้นที่โล่ง มีแสงธรรมชาติรำไร ดูแลไม่ยาก แต่ไม่ควรเปียกแฉะ	ไทรใบสัก	3	2	ไทรใบสัก ใบใหญ่สวยงาม ดูแลง่าย ไม่ควรเปียกแฉะ
3	Sansevieria	290.00	sansevieria.png	ลิ้นมังกร (Sansevieria) เป็นต้นไม้ฟอกอากาศที่ขึ้นชื่อเรื่องความทนทาน ปล่อยออกซิเจนในเวลากลางคืน เหมาะกับห้องนอนหรือห้องทำงานที่มีอากาศถ่ายเทน้อย ใบเรียวยาว สีเขียวแซมเหลืองหรือขาว ดูแลรักษาง่ายมาก รดน้ำเพียงสัปดาห์ละครั้งก็เพียงพอ	ลิ้นมังกร	1	1	ลิ้นมังกร ทนทาน ปล่อยออกซิเจนในเวลากลางคืน ดูแลรักษาง่าย เหมาะกับห้องนอนหรือห้องทำงาน
6	Boston Fern	260.00	boston.png	เฟิร์นบอสตัน (Boston Fern) เป็นต้นไม้ใบดก สีเขียวสดและฟูฟ่อง มีลักษณะใบห้อยระย้าอย่างสวยงาม เหมาะสำหรับแขวนตกแต่งมุมบ้านหรือระเบียง มีคุณสมบัติช่วยเพิ่มความชื้นในอากาศและดูดซับสารพิษ เช่น ฟอร์มัลดีไฮด์ โตได้ดีในแสงรำไร ต้องการความชื้นสูง และควรรดน้ำสม่ำเสมอ	เฟิร์นบอสตัน	2	3	เฟิร์นบอสตัน ใบดก สีเขียวสด เหมาะแขวนตกแต่งมุมบ้าน ต้องการความชื้นสูง
16	Dracaena fragrans	310.00	dracaena.png	วาสนา (Dracaena fragrans) เป็นต้นไม้ฟอกอากาศและต้นไม้มงคลที่เชื่อว่าช่วยเสริมโชคลาภ ใบเรียวยาวสีเขียวเข้ม ดูแลง่าย ทนต่อแสงในร่มและรดน้ำน้อย นิยมปลูกในบ้านและออฟฟิศ ช่วยกรองสารพิษจากอากาศ เช่น เบนซีน และฟอร์มัลดีไฮด์	วาสนา	2	2	วาสนา ใบเรียวยาว ทนต่อแสงในร่มและรดน้ำน้อย
21	Scindapsus pictus	250.00	scindapsus.png	ช้อนเงินช้อนทอง (Scindapsus pictus) เป็นต้นไม้เลื้อยใบลายสีเงิน-เขียวสวยงาม ดูแลง่ายมาก ทนต่อสภาพแสงน้อยและความชื้นต่ำ มีคุณสมบัติในการดูดซับสารพิษในอากาศ เหมาะสำหรับปลูกคลุมดิน แขวน หรือวางในกระถางตกแต่งพื้นที่ภายในบ้าน	ช้อนเงินช้อนทอง	1	2	ไม้เลื้อยที่มีใบลายสวยงาม ทนต่อแสงน้อยและความชื้นต่ำ รดน้ำเมื่อดินเริ่มแห้ง วางไว้ในที่แสงรำไร ไม่โดนแดดจัดเพื่อรักษาสีใบให้สดสวย
1	Monstera deliciosa	550.00	monstera.png	มอนสเตอร่า (Monstera deliciosa) เป็นต้นไม้ยอดนิยมที่มีใบขนาดใหญ่ ฉลุสวยงามไม่เหมือนใคร ช่วยเพิ่มความชุ่มชื้นในอากาศและดูดซับสารพิษในบ้าน เหมาะสำหรับวางในห้องนั่งเล่นหรือมุมทำงาน ชอบแสงรำไร ไม่ต้องการแสงแดดโดยตรง และดูแลง่าย	มอนสเตอร่า	2	2	มอนสเตอร่า ชอบแสงรำไร ไม่โดนแดดโดยตรง ดูแลง่าย เหมาะกับห้องนั่งเล่นหรือมุมทำงาน
2	Ficus elastica	450.00	ficus.png	ยางอินเดีย (Ficus elastica) เป็นต้นไม้ตกแต่งยอดนิยม มีใบหนาเรียบ สีเขียวเข้มเป็นมัน ช่วยฟอกอากาศและดูดซับสารพิษ เช่น ฟอร์มัลดีไฮด์ เหมาะสำหรับวางในห้องนั่งเล่นหรือออฟฟิศ เพราะให้ความรู้สึกหรูหรา ดูแลง่าย ทนทานต่อสภาพแสงในร่ม ต้องการการรดน้ำน้อยและเติบโตช้า	ยางอินเดีย	3	2	ยางอินเดีย ทนทานต่อแสงในร่ม ดูแลง่าย เหมาะสำหรับห้องนั่งเล่นหรือออฟฟิศ
5	Zamioculcas zamiifolia	390.00	zamioculcas.png	กวักมรกต (Zamioculcas zamiifolia) เป็นต้นไม้ฟอกอากาศยอดนิยมและเป็นต้นไม้มงคล ใบเขียวเข้มหนา เงางาม และแข็งแรงมาก ไม่ต้องการแสงแดดโดยตรง ทนแล้ง ดูแลรักษาง่าย เหมาะกับคนไม่มีเวลาดูแลบ้านหรือสำนักงาน วางไว้ตรงไหนก็ดูดี	กวักมรกต	2	1	กวักมรกต ทนแล้ง ดูแลง่าย เหมาะกับคนไม่มีเวลาดูแลบ้านหรือสำนักงาน
18	Bamboo Palm	360.00	bamboo.png	ปาล์มไผ่ (Bamboo Palm) เป็นต้นไม้ประดับในร่มที่มีฟอร์มสวย ใบซ้อนเรียงคล้ายไผ่ ช่วยดูดสารพิษจากอากาศ เช่น เบนซีนและฟอร์มัลดีไฮด์ เพิ่มความชุ่มชื้นในห้อง เหมาะสำหรับวางในพื้นที่แสงรำไร ต้องการน้ำปานกลาง ดูแลง่าย และให้ความรู้สึกเขียวขจีแบบธรรมชาติ	ปาล์มไผ่	2	2	ใบซ้อนเรียงคล้ายต้นไผ่ ช่วยดูดสารพิษในอากาศ รดน้ำสม่ำเสมอ ให้ดินชุ่มชื้นแต่ไม่แฉะ ควรวางในที่แสงรำไรถึงแสงน้อย
19	Syngonium podophyllum	220.00	syngonium.png	ออมเงิน (Syngonium podophyllum) เป็นต้นไม้มงคลขนาดเล็ก ใบมีลักษณะคล้ายหัวใจ สีเขียวหรือเขียวแซมขาว ฟอกอากาศได้ดี ปลูกง่ายในกระถางหรือในน้ำ โตเร็วและทนต่อแสงน้อย นิยมวางไว้บนโต๊ะทำงานเพื่อเสริมพลังบวกและความโชคดี	ออมเงิน	1	2	ไม้เลื้อยที่ดูแลง่าย ชอบแสงรำไรหรือแสงน้อย รดน้ำเมื่อดินเริ่มแห้ง ปลูกในกระถางที่มีการระบายน้ำดี เพื่อป้องกันรากเน่า
\.


--
-- Name: order_items_id_seq; Type: SEQUENCE SET; Schema: public; Owner: opol
--

SELECT pg_catalog.setval('public.order_items_id_seq', 9, true);


--
-- Name: orders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: opol
--

SELECT pg_catalog.setval('public.orders_id_seq', 6, true);


--
-- Name: plants_id_seq; Type: SEQUENCE SET; Schema: public; Owner: opol
--

SELECT pg_catalog.setval('public.plants_id_seq', 26, true);


--
-- Name: order_items order_items_pkey; Type: CONSTRAINT; Schema: public; Owner: opol
--

ALTER TABLE ONLY public.order_items
    ADD CONSTRAINT order_items_pkey PRIMARY KEY (id);


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: opol
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);


--
-- Name: plants plants_pkey; Type: CONSTRAINT; Schema: public; Owner: opol
--

ALTER TABLE ONLY public.plants
    ADD CONSTRAINT plants_pkey PRIMARY KEY (id);


--
-- Name: order_items order_items_order_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: opol
--

ALTER TABLE ONLY public.order_items
    ADD CONSTRAINT order_items_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orders(id);


--
-- Name: order_items order_items_plant_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: opol
--

ALTER TABLE ONLY public.order_items
    ADD CONSTRAINT order_items_plant_id_fkey FOREIGN KEY (plant_id) REFERENCES public.plants(id);


--
-- PostgreSQL database dump complete
--

