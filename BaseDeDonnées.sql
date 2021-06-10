-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  jeu. 11 juin 2020 à 00:49
-- Version du serveur :  10.1.39-MariaDB
-- Version de PHP :  7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `onboarding`
--

-- --------------------------------------------------------

--
-- Structure de la table `demande_moyen`
--

CREATE TABLE `demande_moyen` (
  `id` int(11) NOT NULL,
  `date_demande` date NOT NULL,
  `valide` tinyint(1) NOT NULL DEFAULT '0',
  `id_employé` int(11) DEFAULT NULL,
  `id_moyen` int(11) DEFAULT NULL,
  `id_manager` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `demande_moyen`
--

INSERT INTO `demande_moyen` (`id`, `date_demande`, `valide`, `id_employé`, `id_moyen`, `id_manager`) VALUES
(1, '2020-06-03', 0, 2, 1, 1),
(2, '2020-06-03', 0, 1, 2, 1),
(3, '2020-06-04', 0, 1, 2, 1),
(4, '2020-06-04', 0, 1, 1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `document`
--

CREATE TABLE `document` (
  `id` int(11) NOT NULL,
  `date_rendu` date DEFAULT NULL,
  `is_valide` tinyint(1) NOT NULL DEFAULT '0',
  `label` varchar(255) NOT NULL,
  `notifier` tinyint(1) NOT NULL DEFAULT '0',
  `id_employé` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `document`
--

INSERT INTO `document` (`id`, `date_rendu`, `is_valide`, `label`, `notifier`, `id_employé`) VALUES
(1, '2020-06-12', 1, 'Copie de CIN', 1, 1),
(2, '2020-06-14', 0, 'Copie de dîplome', 1, 2),
(4, '2020-06-13', 0, '3 Acte de naissance', 0, 2);

-- --------------------------------------------------------

--
-- Structure de la table `employé`
--

CREATE TABLE `employé` (
  `id` int(11) NOT NULL,
  `adresse` varchar(255) NOT NULL,
  `cin` varchar(255) NOT NULL,
  `date_naissance` date NOT NULL,
  `date_recrutement` date NOT NULL,
  `email` varchar(255) NOT NULL,
  `mot_passe` varchar(255) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `sexe` varchar(255) NOT NULL,
  `tel` varchar(255) NOT NULL,
  `id_equipe` int(11) DEFAULT NULL,
  `id_poste` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `employé`
--

INSERT INTO `employé` (`id`, `adresse`, `cin`, `date_naissance`, `date_recrutement`, `email`, `mot_passe`, `nom`, `prenom`, `sexe`, `tel`, `id_equipe`, `id_poste`) VALUES
(1, 'Rabat', 'C64675', '1995-06-10', '2020-05-12', 'asmae@gmail.com', 'asmaeEmploye', 'Mansouri', 'Asmae', 'femme', '0673527357', 1, 1),
(2, 'Casablanca', 'J65685', '1993-07-20', '2020-06-01', 'salwa@gmail.com', 'salwaEmploye', 'Derar', 'Salwa', 'femme', '0675334689', 3, 4),
(3, 'Marrakech', 'J298767', '1994-07-23', '2020-06-04', 'ayman@gmail.com', 'AymanEmploye', 'Alaoui', 'Ayman', 'homme', '0673526286', 1, 1),
(4, 'Rabat', 'J298363', '1993-11-20', '2020-06-05', 'zakaria@gmail.com', 'zakariaEmpoye', 'Rahmi', 'Zakaria', 'homme', '0673522483', 1, 3),
(5, 'Agadir', 'J382008', '1999-09-11', '2020-06-03', 'manalmouhaine@gmail.com', 'manalEmploye', 'Mouhaine', 'Manal', 'femme', '0644826589', 1, 5);

-- --------------------------------------------------------

--
-- Structure de la table `equipe`
--

CREATE TABLE `equipe` (
  `id` int(11) NOT NULL,
  `service` varchar(255) NOT NULL,
  `id_manager` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `equipe`
--

INSERT INTO `equipe` (`id`, `service`, `id_manager`) VALUES
(1, 'Informatique', 1),
(2, 'Télécommunication', 2),
(3, 'Marketing', 3);

-- --------------------------------------------------------

--
-- Structure de la table `evenement`
--

CREATE TABLE `evenement` (
  `id` int(11) NOT NULL,
  `date_debut` datetime DEFAULT NULL,
  `date_fin` datetime DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `lieu` varchar(255) DEFAULT NULL,
  `nom` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `id_manager` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `evenement`
--

INSERT INTO `evenement` (`id`, `date_debut`, `date_fin`, `description`, `lieu`, `nom`, `type`, `id_manager`) VALUES
(1, '2020-06-06 16:00:00', '2020-06-06 18:00:00', 'Rénunion avec les membres d\'équipe', 'l\'Entreprise', 'Rénunion avec l\'équipe', 'Team-Building', 1),
(2, '2020-06-09 16:00:00', '2020-06-09 17:00:00', 'Une tournée dans l\'entreprise pour présenter les services', 'Société', 'Tournée de présentation des services', 'Tournée', 1),
(3, '2020-06-08 10:00:00', '2020-06-08 12:00:00', 'Les métiers en systèmes d’information et maîtrise d’ouvrages', 'Teams', 'Formation Online', 'Formation Online', 1),
(4, '2020-06-06 10:00:00', '2020-06-06 12:00:00', 'Pot d\'accueil avec les collaborateurs clé', 'Entreprise Hallway', 'Pot d\'accueil', 'Team-Building', 1);

-- --------------------------------------------------------

--
-- Structure de la table `manager`
--

CREATE TABLE `manager` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `mot_passe` varchar(255) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `manager`
--

INSERT INTO `manager` (`id`, `email`, `mot_passe`, `nom`, `prenom`) VALUES
(1, 'faiza@gmail.com', 'fayzaManager', 'Chakir', 'Faiza'),
(2, 'zakaria@gmail.com', 'zakariaManager', 'Rafidi', 'Zakaria'),
(3, 'samia@gmail.com', 'samiaManager', 'ElMahfoudi', 'Samia');

-- --------------------------------------------------------

--
-- Structure de la table `moyen`
--

CREATE TABLE `moyen` (
  `id` int(11) NOT NULL,
  `label` varchar(255) NOT NULL,
  `quantite` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `moyen`
--

INSERT INTO `moyen` (`id`, `label`, `quantite`) VALUES
(1, 'badge', 5),
(2, 'Téléphone', 6),
(4, 'Casque', 2),
(5, 'Bureau', 1),
(6, 'PC Portable', 1),
(7, 'Clavier', 1),
(8, 'Souris', 2),
(9, 'Carte de visite', 2),
(10, 'Agenda', 2);

-- --------------------------------------------------------

--
-- Structure de la table `participation`
--

CREATE TABLE `participation` (
  `id` int(11) NOT NULL,
  `date_participation` date NOT NULL,
  `id_employe` int(11) DEFAULT NULL,
  `id_evenement` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `participation`
--

INSERT INTO `participation` (`id`, `date_participation`, `id_employe`, `id_evenement`) VALUES
(1, '2020-06-02', 1, 1),
(2, '2020-06-05', 3, 1),
(3, '2020-06-05', 1, 2),
(5, '2020-06-05', 5, 3),
(6, '2020-06-05', 1, 4),
(7, '2020-06-06', 3, 3),
(8, '2020-06-06', 1, 3);

-- --------------------------------------------------------

--
-- Structure de la table `poste`
--

CREATE TABLE `poste` (
  `id` int(11) NOT NULL,
  `nom_poste` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `poste`
--

INSERT INTO `poste` (`id`, `nom_poste`, `type`, `description`) VALUES
(1, 'Développeur Front-end', 'Informatique', 'Développement avec Angular9 et Bootstrap'),
(2, 'Développeur Back-end', 'Développement informatique', 'Développement avec SPRINGBOOT'),
(3, 'Développeur Full-Stack', 'Informatique', 'Déveleppement des applications mobile et des sites web'),
(4, 'Assistant marketing', 'Marketing', 'Gestion des supports de communication et des outils d’aide à la vente '),
(5, 'UI/UX Designer', 'Designe', 'Le design des interfaces  d\"utilisateur');

-- --------------------------------------------------------

--
-- Structure de la table `ressource_humaine`
--

CREATE TABLE `ressource_humaine` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `mot_passe` varchar(255) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `ressource_humaine`
--

INSERT INTO `ressource_humaine` (`id`, `email`, `mot_passe`, `nom`, `prenom`) VALUES
(1, 'souad@gmail.com', 'souadHr', 'Asroubi', 'Souaad');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `demande_moyen`
--
ALTER TABLE `demande_moyen`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK7f6yekygy3fb7e2f24jbvloj` (`id_employé`),
  ADD KEY `FK5lxkm8hk6d619ugfbq5tt7awx` (`id_moyen`),
  ADD KEY `FKtar3g7fvjgg9ilgricgmb19rk` (`id_manager`);

--
-- Index pour la table `document`
--
ALTER TABLE `document`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK3m9afypx50ww519fsqvnscnya` (`id_employé`);

--
-- Index pour la table `employé`
--
ALTER TABLE `employé`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKspa1dus7jn2qk3gdxkfn0n8xd` (`id_equipe`),
  ADD KEY `FKctnx1jtmiwbd2lw61r5c4gnxe` (`id_poste`);

--
-- Index pour la table `equipe`
--
ALTER TABLE `equipe`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKayxhro9xhgys3qlh2envtn9pt` (`id_manager`);

--
-- Index pour la table `evenement`
--
ALTER TABLE `evenement`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKcmf1n5x7pg0yg93l0glg608sv` (`id_manager`);

--
-- Index pour la table `manager`
--
ALTER TABLE `manager`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `moyen`
--
ALTER TABLE `moyen`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `participation`
--
ALTER TABLE `participation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKc1ugjyf36agooouhcq84s7e7j` (`id_employe`),
  ADD KEY `FKpu84qq5xinujychwdbdgdwfl8` (`id_evenement`);

--
-- Index pour la table `poste`
--
ALTER TABLE `poste`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `ressource_humaine`
--
ALTER TABLE `ressource_humaine`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `demande_moyen`
--
ALTER TABLE `demande_moyen`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `document`
--
ALTER TABLE `document`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `employé`
--
ALTER TABLE `employé`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `equipe`
--
ALTER TABLE `equipe`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `evenement`
--
ALTER TABLE `evenement`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `manager`
--
ALTER TABLE `manager`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `moyen`
--
ALTER TABLE `moyen`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `participation`
--
ALTER TABLE `participation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `poste`
--
ALTER TABLE `poste`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `ressource_humaine`
--
ALTER TABLE `ressource_humaine`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `demande_moyen`
--
ALTER TABLE `demande_moyen`
  ADD CONSTRAINT `FK5lxkm8hk6d619ugfbq5tt7awx` FOREIGN KEY (`id_moyen`) REFERENCES `moyen` (`id`),
  ADD CONSTRAINT `FK7f6yekygy3fb7e2f24jbvloj` FOREIGN KEY (`id_employé`) REFERENCES `employé` (`id`),
  ADD CONSTRAINT `FKtar3g7fvjgg9ilgricgmb19rk` FOREIGN KEY (`id_manager`) REFERENCES `manager` (`id`);

--
-- Contraintes pour la table `document`
--
ALTER TABLE `document`
  ADD CONSTRAINT `FK3m9afypx50ww519fsqvnscnya` FOREIGN KEY (`id_employé`) REFERENCES `employé` (`id`);

--
-- Contraintes pour la table `employé`
--
ALTER TABLE `employé`
  ADD CONSTRAINT `FKctnx1jtmiwbd2lw61r5c4gnxe` FOREIGN KEY (`id_poste`) REFERENCES `poste` (`id`),
  ADD CONSTRAINT `FKspa1dus7jn2qk3gdxkfn0n8xd` FOREIGN KEY (`id_equipe`) REFERENCES `equipe` (`id`);

--
-- Contraintes pour la table `equipe`
--
ALTER TABLE `equipe`
  ADD CONSTRAINT `FKayxhro9xhgys3qlh2envtn9pt` FOREIGN KEY (`id_manager`) REFERENCES `manager` (`id`);

--
-- Contraintes pour la table `evenement`
--
ALTER TABLE `evenement`
  ADD CONSTRAINT `FKcmf1n5x7pg0yg93l0glg608sv` FOREIGN KEY (`id_manager`) REFERENCES `manager` (`id`);

--
-- Contraintes pour la table `participation`
--
ALTER TABLE `participation`
  ADD CONSTRAINT `FKc1ugjyf36agooouhcq84s7e7j` FOREIGN KEY (`id_employe`) REFERENCES `employé` (`id`),
  ADD CONSTRAINT `FKpu84qq5xinujychwdbdgdwfl8` FOREIGN KEY (`id_evenement`) REFERENCES `evenement` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
