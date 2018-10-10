﻿CREATE TABLE [dbo].[Posts] (
    [Id] INT IDENTITY (1, 1) NOT NULL,
    [Title] NVARCHAR (140) NOT NULL,
    [Description] NVARCHAR (MAX) NOT NULL,
    [Url] NVARCHAR (100) NOT NULL,
    [CreationDate] DATETIME NULL, 
    [PublicationDate] DATETIME NULL, 
    CONSTRAINT [PK_Posts] PRIMARY KEY CLUSTERED ([Id] ASC), 
    CONSTRAINT [FK_Posts_Url] UNIQUE ([Url])
);