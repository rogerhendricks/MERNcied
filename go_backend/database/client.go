package database
import (
	"go_backend/models"
	"log"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var db *gorm.DB
var err error

func Connect(connectionString string) () {
	db, err = gorm.Open(sqlite.Open(connectionString), &gorm.Config{})
	if err != nil {
		log.Fatal(err)
		panic("Cannot connect to DB")
	}
	log.Println("Connected to Database!")
}
func Migrate() {
	db.AutoMigrate(&models.User{})
	log.Println("Database Migration Completed!")
}
