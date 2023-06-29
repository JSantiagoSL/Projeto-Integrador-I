/*
  Warnings:

  - You are about to drop the column `instagram` on the `ong` table. All the data in the column will be lost.
  - You are about to alter the column `nome` on the `ong` table. The data in that column could be lost. The data in that column will be cast from `VarChar(50)` to `VarChar(45)`.
  - You are about to alter the column `senha` on the `ong` table. The data in that column could be lost. The data in that column will be cast from `VarChar(30)` to `VarChar(20)`.

*/
-- AlterTable
ALTER TABLE `ong` DROP COLUMN `instagram`,
    MODIFY `nome` VARCHAR(45) NOT NULL,
    MODIFY `senha` VARCHAR(20) NOT NULL,
    MODIFY `foto` TINYBLOB NOT NULL;

-- CreateTable
CREATE TABLE `adotante` (
    `cpf_adot` VARCHAR(11) NOT NULL,
    `rendafixa` ENUM('Sim', 'Não') NOT NULL,
    `aceitacaoAnimal` ENUM('Sim', 'Não') NOT NULL,
    `animaisAtuais` VARCHAR(45) NOT NULL,
    `animaisAntigos` VARCHAR(100) NOT NULL,
    `descMoradores` VARCHAR(255) NOT NULL,
    `motivacao` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`cpf_adot`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `animais` (
    `id_animal` INTEGER NOT NULL AUTO_INCREMENT,
    `cnpj_pet` VARCHAR(20) NOT NULL,
    `especie` ENUM('gato', 'cachorro') NOT NULL,
    `sexo` ENUM('F', 'M') NOT NULL,
    `porte` ENUM('P', 'M', 'G') NOT NULL,
    `idade` ENUM('Filhote', 'Adulto', 'Idoso') NOT NULL,
    `pelagem` ENUM('Curto', 'Longo') NOT NULL,
    `cor` VARCHAR(45) NOT NULL,
    `deficiencia` VARCHAR(45) NULL,
    `vacinas` VARCHAR(100) NOT NULL,
    `descricao` VARCHAR(45) NULL,
    `foto` TINYBLOB NOT NULL,

    INDEX `cnpj_idx`(`cnpj_pet`),
    PRIMARY KEY (`id_animal`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `conta_banco_ong` (
    `cnpj` VARCHAR(20) NOT NULL,
    `numConta` VARCHAR(30) NOT NULL,
    `agencia` VARCHAR(6) NOT NULL,
    `operacao` VARCHAR(4) NULL,
    `pix` VARCHAR(32) NOT NULL,
    `qrcode` TINYBLOB NULL,

    PRIMARY KEY (`cnpj`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `endereco_ong` (
    `cnpj_end` VARCHAR(20) NOT NULL,
    `cep` VARCHAR(9) NOT NULL,
    `cidade` VARCHAR(30) NOT NULL,
    `bairro` VARCHAR(50) NOT NULL,
    `rua` VARCHAR(50) NOT NULL,
    `numero` VARCHAR(5) NOT NULL,

    PRIMARY KEY (`cnpj_end`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `endereco_pessoas` (
    `cpf_end` VARCHAR(11) NOT NULL,
    `cidade` VARCHAR(30) NOT NULL,
    `bairro` VARCHAR(50) NOT NULL,
    `rua` VARCHAR(50) NOT NULL,
    `numero` VARCHAR(5) NOT NULL,
    `tipoMoradia` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`cpf_end`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pessoas` (
    `cpf` VARCHAR(11) NOT NULL,
    `nome` VARCHAR(255) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `telefone` VARCHAR(15) NOT NULL,

    PRIMARY KEY (`cpf`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `voluntarios` (
    `cpf_vol` VARCHAR(11) NOT NULL,
    `disponibilidade` ENUM('Manhã', 'Tarde') NOT NULL,
    `transporte` ENUM('Sim', 'Não') NOT NULL,
    `funcao` ENUM('Limpeza', 'coleta', 'ajuda') NOT NULL,

    PRIMARY KEY (`cpf_vol`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `adotante` ADD CONSTRAINT `cpf_adot` FOREIGN KEY (`cpf_adot`) REFERENCES `pessoas`(`cpf`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `animais` ADD CONSTRAINT `cnpj_pet` FOREIGN KEY (`cnpj_pet`) REFERENCES `ong`(`cnpj`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `conta_banco_ong` ADD CONSTRAINT `cnpj` FOREIGN KEY (`cnpj`) REFERENCES `ong`(`cnpj`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `endereco_ong` ADD CONSTRAINT `cnpj_end` FOREIGN KEY (`cnpj_end`) REFERENCES `ong`(`cnpj`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `endereco_pessoas` ADD CONSTRAINT `cpf_end` FOREIGN KEY (`cpf_end`) REFERENCES `pessoas`(`cpf`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `voluntarios` ADD CONSTRAINT `cpf_vol` FOREIGN KEY (`cpf_vol`) REFERENCES `pessoas`(`cpf`) ON DELETE NO ACTION ON UPDATE NO ACTION;
