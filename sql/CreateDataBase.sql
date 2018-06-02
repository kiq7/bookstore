CREATE DATABASE BookStore
GO
USE BookStore
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Books](
	[Isbn] [nvarchar](13) PRIMARY KEY NOT NULL,
	[Title] [nvarchar](100) NOT NULL,
	[Author] [nvarchar](20) NOT NULL,
	[Publisher] [nvarchar](30) NOT NULL,
	[CreateDate] [datetime] NOT NULL
) ON [PRIMARY]

