/*
  Warnings:

  - You are about to drop the `post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `post` DROP FOREIGN KEY `Post_userId_fkey`;

-- DropTable
DROP TABLE `post`;

-- DropTable
DROP TABLE `user`;

-- CreateTable
CREATE TABLE `ong` (
    `cnpj` VARCHAR(20) NOT NULL,
    `nome` VARCHAR(50) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `senha` VARCHAR(30) NOT NULL,
    `facebook` VARCHAR(200) NULL,
    `instagram` VARCHAR(200) NULL,
    `whatsapp` VARCHAR(15) NULL,
    `descricao_ong` LONGTEXT NOT NULL,
    `foto` VARCHAR(200) NOT NULL,

    PRIMARY KEY (`cnpj`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
