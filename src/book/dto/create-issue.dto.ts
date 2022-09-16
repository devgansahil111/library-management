import { isNotEmpty, IsNotEmpty } from 'class-validator';

export class CreateIssueDto {
    @IsNotEmpty()
    studentId : string

    @IsNotEmpty()
    bookId : string

    @IsNotEmpty()
    issueAt: Date

    @IsNotEmpty()
    returnAt:Date

    

}