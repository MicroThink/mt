package main 

import (
   "time"
   "gopkg.in/mgo.v2/bson"
)

type Thought struct {
	ID        bson.ObjectId  `bson:"_id" json:"id"`
	Tag       string  		 `bson:"tag" json:"tag"`
	Content   string         `bson:"content" json:"content"`
    TimeStamp string         `bson:"time_stamp" json:"time_stamp"`
}

type Thoughts []Thought