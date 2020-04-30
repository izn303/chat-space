
# chat-space DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|name|string|null: false|
### Association
- has_many :chats
- has_many :users_groupes
- has_many  :groups,  through: users_groups



## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|user_id|string|null: false|
|chat_id|string|null: false|
### Association
- has_many :users
- has_many  :users,  through: users_groups



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
|text|text|  |
|users_id|integer|null: false, foreign_key: true|
|groups_id|integer|null: false, foreign_key: true|
|image|string|  |
### Association
- belongs_to :user
- belongs_to :group