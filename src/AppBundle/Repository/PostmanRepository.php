<?php

namespace AppBundle\Repository;
use Doctrine\ORM\EntityRepository;
use AppBundle\Model\PostmanInterface;

/**
 * PostmanRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class PostmanRepository extends EntityRepository
{
    public function delete(PostmanInterface $postman) {
        $em = $this->getEntityManager();
        $em->remove($postman);
        $em->flush();
    }

    public function save(PostmanInterface $postman) {
        $em = $this->getEntityManager();
        $em->persist($postman);
        $em->flush();
    }
}
