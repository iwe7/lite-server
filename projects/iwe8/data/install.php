<?php

$sql = "
CREATE TABLE IF NOT EXISTS `ims_iwe7_shop` (
    `sid` varchar(11) NOT NULL,
    `offset_type` varchar(64) NOT NULL,
    `province` varchar(300) NOT NULL DEFAULT '',
    `city` varchar(32) NOT NULL COMMENT '推荐人UID',
    `district` varchar(32) NOT NULL DEFAULT 'main',
    `address` varchar(32) NOT NULL COMMENT '上级店铺id',
    `longitude` varchar(32) NOT NULL,
    `latitude` varchar(32) NOT NULL,
    `categories` varchar(320) NOT NULL DEFAULT '''''',
    `business_name` varchar(32) NOT NULL,
    `branch_name` varchar(32) NOT NULL,
    `telephone` varchar(320) NOT NULL,
    `photo_list` text NOT NULL,
    `recommend` varchar(320) NOT NULL,
    `special` varchar(320) NOT NULL,
    `introduction` varchar(320) NOT NULL,
    `open_time` varchar(32) NOT NULL,
    `avg_price` decimal(10,2) NOT NULL,
    `categories_0` varchar(32) NOT NULL,
    `categories_1` varchar(32) NOT NULL,
    `categories_2` varchar(32) NOT NULL,
    `detail` varchar(64) NOT NULL,
    `shop_logo` varchar(320) NOT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='门店';

  CREATE TABLE IF NOT EXISTS `ims_iwe7_shop_goods` (
    `gid` varchar(32) NOT NULL,
    `sid` varchar(32) NOT NULL,
    `title` varchar(32) NOT NULL,
    `thumb` varchar(320) NOT NULL,
    `images` text NOT NULL,
    `price` decimal(10,2) NOT NULL,
    `price_del` decimal(10,2) NOT NULL,
    `url` varchar(320) NOT NULL,
    `brand` varchar(320) NOT NULL,
    `tip` varchar(32) NOT NULL,
    `tag` varchar(32) NOT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

  CREATE TABLE IF NOT EXISTS `ims_iwe7_shop_goods_category` (
    `cid` varchar(32) NOT NULL,
    `name` varchar(32) NOT NULL DEFAULT '',
    `logo` varchar(320) NOT NULL,
    `sid` varchar(32) NOT NULL DEFAULT '0' COMMENT '店铺Id'
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

  ALTER TABLE `ims_iwe7_shop`
    ADD PRIMARY KEY (`sid`),
    ADD UNIQUE KEY `sid` (`sid`);

  ALTER TABLE `ims_iwe7_shop_goods`
    ADD PRIMARY KEY (`gid`),
    ADD UNIQUE KEY `gid` (`gid`);

  ALTER TABLE `ims_iwe7_shop_goods_category`
    ADD PRIMARY KEY (`cid`),
    ADD UNIQUE KEY `title` (`name`);
";
