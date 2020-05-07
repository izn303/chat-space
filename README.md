
# chat-space DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|name|string|null: false|
### Association
- has_many :messages
- has_many :users_groups
- has_many :groups,  through: users_groups


## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
### Association
- has_many :users_groups
- has_many :users,  through: users_groups
- has_many :messages


## users_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|users_id|integer|null: false, foreign_key: true|
|groups_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group


## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|  |
|users_id|integer|null: false, foreign_key: true|
|groups_id|integer|null: false, foreign_key: true|
|image|string|  |
### Association
- belongs_to :user
- belongs_to :group
