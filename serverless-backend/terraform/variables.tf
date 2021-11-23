variable "api_name" {
  type    = string
  default = "Shawn API"
}
variable "app_version" {
  type    = string
  default = "1.0.0"
}

variable "deploy_stage" {
  type    = string
  default = "dev"
}

variable "shawn_get_areas_function_name" {
  type        = string
  default     = "shawn-get-areas"
}

variable "shawn_get_locations_function_name" {
  type        = string
  default     = "shawn-get-locations"
}
