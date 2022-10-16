DROP SCHEMA IF EXISTS guia_das_matilhas;
CREATE SCHEMA guia_das_matilhas;
USE guia_das_matilhas;

CREATE TABLE breeds (
	breeds_id INT PRIMARY KEY AUTO_INCREMENT,
	breeds_name varchar(15) NOT NULL,
  breeds_gnose INT NOT NULL,
  breeds_image1 varchar(50) NOT NULL,
  breeds_image2 varchar(50) NOT NULL   
) engine = InnoDB;

CREATE TABLE auspices(
	auspices_id INT PRIMARY KEY AUTO_INCREMENT,
  auspices_name varchar(10) NOT NULL,
  auspices_moon varchar(15) NOT NULL,
  auspices_fury INT NOT NULL,
  auspices_image1 varchar(50) NOT NULL,
  auspices_image2 varchar(50) NOT NULL,
  auspices_image3 varchar(50) NOT NULL
) engine = InnoDB;

CREATE TABLE trybes (
	trybes_id INT PRIMARY KEY AUTO_INCREMENT,
  trybes_name varchar(50) NOT NULL,
  trybes_state varchar(15) NOT NULL,
  trybes_fdv INT NOT NULL,
  trybes_description varchar(500),
  trybes_image1 varchar(50) NOT NULL,
  trybes_image2 varchar(50) NOT NULL,
  trybes_image3 varchar(50) NOT NULL,
  trybes_image4 varchar(50) NOT NULL,
  trybes_image5 varchar(50) NOT NULL
) engine = InnoDB;

CREATE TABLE fonts (
  font_id INT PRIMARY KEY AUTO_INCREMENT,
  font_book VARCHAR(50) NOT NULL,
  font_page INT NOT NULL,
  font_edition VARCHAR(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE belongs (
  belong_id INT PRIMARY KEY AUTO_INCREMENT,
  belong_name VARCHAR(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE gifts (
  gift_id INT PRIMARY KEY AUTO_INCREMENT,
  gift_name VARCHAR(50) NOT NULL,
  gift_rank INT NOT NULL,
  gift_textPtBr VARCHAR(200) NOT NULL,
  gift_systemPtBr VARCHAR(200) NOT NULL,
  gift_textOriginal VARCHAR(200) NOT NULL,
  gift_systemOriginal VARCHAR(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE gifts_font (
  gift_id INT NOT NULL,
  font_id INT NOT NULL,
  CONSTRAINT FOREIGN KEY (gift_id) REFERENCES gifts (gift_id),
  CONSTRAINT FOREIGN KEY (font_id) REFERENCES fonts (font_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE gifts_belong (
  gift_id INT NOT NULL,
  belong_id INT NOT NULL,
  CONSTRAINT FOREIGN KEY (gift_id) REFERENCES gifts (gift_id),
  CONSTRAINT FOREIGN KEY (belong_id) REFERENCES belongs (belong_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE login_app (
	login_id INT PRIMARY KEY AUTO_INCREMENT,
	login_user varchar(20) NOT NULL,
    login_password varchar(20) NOT NULL
    ) engine = InnoDB;
    
INSERT INTO login_app (login_user, login_password)
	VALUES
    ('bruno-cabral', 123456),
    ('thiago-lucas', 123456);

INSERT INTO guia_das_matilhas.auspices(auspices_name, auspices_moon, auspices_fury, auspices_image1, auspices_image2, auspices_image3)
VALUES
	('Ragabash', 'Lua Nova', 1, 'ragabash__invertido-removebg-preview.png', 'ragabash2.png', 'ragabash.png'),
  ('Theurge', 'Lua Crescente', 2, 'theurge__invertido-removebg-preview.png', 'theurge2.png', 'theurge.png'),
  ('Philodox', 'Meia Lua', 3, 'philodox__invertido-removebg-preview.png', 'philodox2.png', 'philodox.png'),
  ('Galliard', 'Lua Gibosa', 4, 'galliard__invertido-removebg-preview.png', 'galliard2.png', 'galliard.png'),
  ('Ahroun', 'Lua Cheia', 5, 'ahroun_invertido-removebg-preview.png', 'ahroun2.png', 'ahroun.png');
    
INSERT INTO guia_das_matilhas.breeds(breeds_name, breeds_gnose, breeds_image1, breeds_image2)
VALUES
	('Hominídeos', 1, 'homid.png', 'homid.png'),
	('Impuros', 3, 'metis.png', 'metis.png'),
	('Lupinos', 5, 'lupus.png', 'lupus.png');

INSERT INTO guia_das_matilhas.trybes(trybes_name, trybes_state, trybes_fdv, trybes_image1, trybes_image2, trybes_image3, trybes_image4, trybes_image5)
VALUES
	('Andarilhos do Asfalto', 'Nação Garou', 3, 'glassWalkers.png', 'glassWalkers_slide.png', 'glassWalkers_glifo.jpg', 'glassWalkers_semFundo.png', 'glassWalkers_transp.png' ),
	('Crias de Fenris', 'Nação Garou', 3, 'getOfFenris.png', 'getOfFenris_slide.png', 'getOfFenris_glifo.jpg', 'getOfFenris_semFundo.png', 'getOfFenris_transp.png' ),
	('Fianna', 'Nação Garou', 3, 'fianna.png', 'fianna_slide.png', 'fianna_glifo.jpg', 'fianna_semFundo.png', 'fianna_transp.png' ),
	('Filhos de Gaia', 'Nação Garou', 4, 'childrenOfGaia.png', 'childrenOfGaia_slide.png', 'childrenOfGaia_glifo.jpg', 'childrenOfGaia_semFundo.png', 'childrenOfGaia_transp.png' ),
	('Fúrias Negras', 'Nação Garou', 3, 'blackFuries.png', 'blackFuries_slide.png', 'blackFuries_glifo.jpg', 'blackFuries_semFundo.png', 'blackFuries_transp.png' ),
	('Garras Vermelhas', 'Nação Garou', 3, 'RedTalons.png', 'RedTalons_slide.png', 'RedTalons_glifo.jpg', 'RedTalons_semFundo.png', 'RedTalons_transp.png' ),
	('Peregrinos Silenciosos', 'Nação Garou', 3, 'silentStriders.png', 'silentStriders_slide.png', 'silentStriders_glifo.jpg', 'silentStriders_semFundo.png', 'silentStriders_transp.png' ),
	('Portadores da Luz Interior', 'Hengeyokai', 4, 'stargazers.png', 'stargazers_slide.png', 'stargazers_glifo.jpg', 'stargazers_semFundo.png', 'stargazers_transp.png' ),
	('Presas de Prata', 'Nação Garou', 3, 'SilverFangs.png', 'SilverFangs_slide.png', 'SilverFangs_glifo.jpg', 'SilverFangs_semFundo.png', 'SilverFangs_transp.png' ),
	('Roedores de Ossos', 'Nação Garou', 4, 'boneGnawers.png', 'boneGnawers_slide.png', 'boneGnawers_glifo.jpg', 'boneGnawers_semFundo.png', 'boneGnawers_transp.png' ),
	('Senhores das Sombras', 'Nação Garou', 3, 'shadowLords.png', 'shadowLords_slide.png', 'shadowLords_glifo.jpg', 'shadowLords_semFundo.png', 'shadowLords_transp.png' ),
	('Uktena', 'Nação Garou', 3, 'uktena.png', 'uktena_slide.png', 'uktena_glifo.jpg', 'uktena_semFundo.png', 'uktena_transp.png' ),
	('Wendigo', 'Nação Garou', 4, 'Wendigo.png', 'Wendigo_slide.png', 'Wendigo_glifo.jpg', 'Wendigo_semFundo.png', 'Wendigo_transp.png' ),
	('Bunyip', 'Extintos', 3, 'bunyip.png', 'bunyip_slide.png', 'bunyip_glifo.jpg', 'bunyip_semFundo.png', 'bunyip_transp.png' ),
	('Croatan', 'Extintos', 3, 'croatan.png', 'croatan_slide.png', 'croatan_glifo.jpg', 'croatan_semFundo.png', 'croatan_transp.png' ),
	('Uivadores Brancos', 'Extintos', 3, 'Howlers.png', 'Howlers_slide.png', 'Howlers_glifo.jpg', 'Howlers_semFundo.png', 'Howlers_transp.png' ),
  ('Dançarinos da Espiral Negra', 'Caída', 3, 'blackSpiralDancers.png', 'blackSpiralDancers_slide.png', 'blackSpiralDancers_semFundo.png', 'blackSpiralDancers_semFundo.png', 'blackSpiralDancers_transp.png' );
