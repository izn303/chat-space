
# chat-space DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|username|string|null: false|
### Association
- has_many :chats
- has_many :users_groupes
- has_many  :groups,  through: users_groups



## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|title|text|null: false|
### Association
- has_many :posts_tags
- has_many  :tags,  through: users_groups



## users_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|post_id|integer|null: false, foreign_key: true|
|tag_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group



## chatテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|user_id|integer|null: false, foreign_key: true|
|time|integer|  |
### Association
- belongs_to :user